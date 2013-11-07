
import os
from behave import *
from flask import json

from test import app

def test_json(context):
    response_data = json.loads(context.response.get_data())
    context_data = json.loads(context.text)
    for key in context_data:
        assert key in response_data, key
        if context_data[key]:
            assert response_data[key] == context_data[key], response_data[key]

def get_fixture_path(fixture):
    abspath = os.path.abspath(os.path.dirname(__file__))
    return os.path.join(abspath, 'fixtures', fixture)

def get_self_href(resource):
    href = resource['_links']['self']['href']
    return href.replace(app.config.get('SERVER_NAME'), '')

def get_res(url, context):
    response = context.client.get(url, headers=context.headers)
    assert response.status_code == 200, response.get_data()
    return json.loads(response.get_data())

@given('empty "{resource}"')
def step_impl(context, resource):
    with app.test_request_context():
        app.data.remove(resource)

@given('"{resource}"')
def step_impl(context, resource):
    with app.test_request_context():
        app.data.remove(resource)
        items = json.loads(context.text)
        app.data.insert(resource, items)
        context.data = items

@when('we post to "{url}"')
def step_impl(context, url):
    data = context.text
    context.response = context.client.post(url, data=data, headers=context.headers)

@when('we put to "{url}"')
def step_impl(context, url):
    data =context.text
    context.response = context.client.put(url, data=data, headers=context.headers)

@when('we get "{url}"')
def step_impl(context, url):
    context.response = context.client.get(url, headers=context.headers)

@when('we delete "{url}"')
def step_impl(context, url):
    res = get_res(url, context)
    headers = [('If-Match', res['etag'])]
    headers += context.headers
    context.response = context.client.delete(get_self_href(res), headers=headers)

@when('we patch "{url}"')
def step_impl(context, url):
    res = get_res(url, context)
    headers = [('If-Match', res['etag'])]
    headers += context.headers
    data = context.text
    context.response = context.client.patch(get_self_href(res), data=data, headers=headers)

@when('we upload a binary file')
def step_impl(context):
    with open(get_fixture_path('flower.jpg'), 'rb') as f:
        data = {'file': f}
        headers = [('Content-Type', 'multipart/form-data')]
        headers.append(context.headers[1])
        context.response = context.client.post('/upload', data=data, headers=headers)

@then('we get new resource')
def step_impl(context):
    assert context.response.status_code == 200, context.response.get_data()
    data = json.loads(context.response.get_data())
    assert data['status'] == 'OK', data
    assert data['_links']['self'], data
    test_json(context)

@then('we get list with {total_count} items')
def step_impl(context, total_count):
    response_list = json.loads(context.response.get_data())
    assert len(response_list['_items']) == int(total_count), response_list

@then('we get no "{field}"')
def step_impl(context, field):
    response_data = json.loads(context.response.get_data())
    assert field not in response_data, response_data

@then('we get existing resource')
def step_impl(context):
    assert context.response.status_code == 200, context.response.status_code
    resp = json.loads(context.response.get_data())
    test_json(context)

@then('we get OK response')
def step_impl(context):
    assert context.response.status_code == 200, context.response.get_data()

@then('we get response code {code}')
def step_impl(context, code):
    assert context.response.status_code == int(code), context.response.status_code

@then('we get updated response')
def step_impl(context):
    assert context.response.status_code == 200, context.response.status_code

@then('we get "{key}"')
def step_impl(context, key):
    assert context.response.status_code == 200, context.response.status_code
    data = json.loads(context.response.get_data())
    assert data.get(key), data

@then('we get action in user activity')
def step_impl(context):
    response = context.client.get('/activity', headers=context.headers)
    data = json.loads(response.get_data())
    assert len(data['_items']), data

@then('we get a file reference')
def step_impl(context):
    assert context.response.status_code == 200, context.response.get_data()
    data = json.loads(context.response.get_data())
    assert 'url' in data
    response = context.client.get(data['url'], headers=context.headers)
    assert response.status_code == 200, response.status_code
    assert len(response.get_data()), response
    assert response.mimetype == 'image/jpeg', response.mimetype

@then('we get a picture url')
def step_impl(context):
    data = json.loads(context.response.get_data())
    assert 'picture_url' in data, data
