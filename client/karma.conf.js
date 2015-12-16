'use strict';

module.exports = function(config) {
    config.set({
        frameworks: [
            'jasmine'
        ],

        preprocessors: {
            '**/*.html': ['ng-html2js'],
            '**/superdesk/**/*.js': ['coverage'],
            '**/superdesk-*/**/*.js': ['coverage']
        },

        // list of files / patterns to load in the browser
        files: [
            'app/scripts/bower_components/jquery/dist/jquery.js',
            'app/scripts/bower_components/lodash/lodash.js',
            'app/scripts/bower_components/bootstrap/dist/js/bootstrap.min.js',
            'app/scripts/bower_components/angular/angular.js',
            'app/scripts/bower_components/angular-route/angular-route.js',
            'app/scripts/bower_components/angular-mocks/angular-mocks.js',
            'app/scripts/bower_components/angular-resource/angular-resource.js',
            'app/scripts/bower_components/angular-gettext/dist/angular-gettext.js',
            'app/scripts/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/scripts/bower_components/ng-file-upload/angular-file-upload.js',

            'app/scripts/bower_components/gridster/dist/jquery.gridster.with-extras.js',
            'app/scripts/bower_components/medium-editor/dist/js/medium-editor.js',
            'app/scripts/bower_components/ment.io/dist/mentio.js',
            'app/scripts/bower_components/rangy/rangy-core.js',
            'app/scripts/bower_components/rangy/rangy-selectionsaverestore.js',

            'app/scripts/bower_components/momentjs/moment.js',
            'app/scripts/bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',
            'app/scripts/bower_components/angular-moment/angular-moment.js',
            'app/scripts/bower_components/d3/d3.js',
            'app/scripts/bower_components/jcrop/js/jquery.Jcrop.js',

            'app/scripts/superdesk/mocks.js',
            'app/scripts/superdesk-*/**/*.html',
            'app/scripts/superdesk/**/*.html',

            // Js files in the same order than in index.html
            'app/scripts/gettext.js',

            'app/scripts/superdesk/activity/activity.js',
            'app/scripts/superdesk/activity/activity-chooser-directive.js',
            'app/scripts/superdesk/activity/activity-list-directive.js',
            'app/scripts/superdesk/activity/activity-modal-directive.js',
            'app/scripts/superdesk/analytics/analytics.js',
            'app/scripts/superdesk/api/api.js',
            'app/scripts/superdesk/api/api-service.js',
            'app/scripts/superdesk/api/http-endpoint-factory.js',
            'app/scripts/superdesk/api/request-service.js',
            'app/scripts/superdesk/api/timeout-interceptor.js',
            'app/scripts/superdesk/api/url-resolver-service.js',
            'app/scripts/superdesk/auth/auth.js',
            'app/scripts/superdesk/auth/auth-service.js',
            'app/scripts/superdesk/auth/session-service.js',
            'app/scripts/superdesk/auth/basic-auth-adapter.js',
            'app/scripts/superdesk/auth/login-modal-directive.js',
            'app/scripts/superdesk/beta/beta.js',
            'app/scripts/superdesk/datetime/datetime.js',
            'app/scripts/superdesk/datetime/group-dates-directive.js',
            'app/scripts/superdesk/datetime/reldate-directive.js',
            'app/scripts/superdesk/datetime/reldate-directive-complex.js',
            'app/scripts/superdesk/datetime/absdate-directive.js',
            'app/scripts/superdesk/error/error.js',
            'app/scripts/superdesk/elastic/elastic.js',
            'app/scripts/superdesk/elastic/es.js',
            'app/scripts/superdesk/filters.js',
            'app/scripts/superdesk/config/config.js',
            'app/scripts/superdesk/services/translate.js',
            'app/scripts/superdesk/services/preferencesService.js',
            'app/scripts/superdesk/services/permissionsService.js',
            'app/scripts/superdesk/services/data.js',
            'app/scripts/superdesk/services/entity.js',
            'app/scripts/superdesk/services/server.js',
            'app/scripts/superdesk/services/storage.js',
            'app/scripts/superdesk/services/dragDropService.js',
            'app/scripts/superdesk/services/modalService.js',
            'app/scripts/superdesk/services/workflowService.js',
            'app/scripts/superdesk/directives/sdAutofocus.js',
            'app/scripts/superdesk/directives/sdCheck.js',
            'app/scripts/superdesk/directives/sdConfirm.js',
            'app/scripts/superdesk/directives/sdDebounceThrottle.js',
            'app/scripts/superdesk/directives/sdDragDrop.js',
            'app/scripts/superdesk/directives/sdPermissions.js',
            'app/scripts/superdesk/directives/sdSearch.js',
            'app/scripts/superdesk/directives/sdSearchList.js',
            'app/scripts/superdesk/directives/sdSelect.js',
            'app/scripts/superdesk/directives/sdSlider.js',
            'app/scripts/superdesk/directives/sdSort.js',
            'app/scripts/superdesk/directives/sdTypeahead.js',
            'app/scripts/superdesk/directives/sdUserAvatar.js',
            'app/scripts/superdesk/directives/sdWithParams.js',
            'app/scripts/superdesk/editor/editor.js',
            'app/scripts/superdesk/features/features.js',
            'app/scripts/superdesk/services/asset.js',
            'app/scripts/superdesk/services/image-factory.js',
            'app/scripts/superdesk/list/list.js',
            'app/scripts/superdesk/keyboard/keyboard.js',
            'app/scripts/superdesk/privileges/privileges.js',
            'app/scripts/superdesk/notification/notification.js',
            'app/scripts/superdesk/itemList/itemList.js',
            'app/scripts/superdesk/menu/menu.js',
            'app/scripts/superdesk/menu/notifications/notifications.js',
            'app/scripts/superdesk/notify/notify.js',
            'app/scripts/superdesk/ui/ui.js',
            'app/scripts/superdesk/ui/autoheight-directive.js',
            'app/scripts/superdesk/upload/upload.js',
            'app/scripts/superdesk/upload/upload-service.js',
            'app/scripts/superdesk/upload/image-preview-directive.js',
            'app/scripts/superdesk/upload/video-capture-directive.js',
            'app/scripts/superdesk/upload/crop-directive.js',
            'app/scripts/superdesk/upload/image-crop-directive.js',
            'app/scripts/superdesk/superdesk.js',
            'app/scripts/superdesk-workspace/content/content.js',
            'app/scripts/superdesk-dashboard/workspace-tasks/tasks.js',
            'app/scripts/superdesk-users/users.js',
            'app/scripts/superdesk-users/profile.js',
            'app/scripts/superdesk-users/activity/activity.js',
            'app/scripts/superdesk-users/import/import.js',
            'app/scripts/superdesk-groups/groups.js',
            'app/scripts/superdesk-publish/publish.js',
            'app/scripts/superdesk-templates/templates.js',

            'app/scripts/superdesk-desks/desks.js',
            'app/scripts/superdesk-authoring/authoring.js',
            'app/scripts/superdesk-authoring/widgets/widgets.js',
            'app/scripts/superdesk-authoring/comments/comments.js',
            'app/scripts/superdesk-authoring/versioning/versioning.js',
            'app/scripts/superdesk-authoring/versioning/versions/versions.js',
            'app/scripts/superdesk-authoring/versioning/history/history.js',
            'app/scripts/superdesk-authoring/metadata/metadata.js',
            'app/scripts/superdesk-authoring/workqueue/workqueue.js',
            'app/scripts/superdesk-authoring/packages/packages.js',
            'app/scripts/superdesk-authoring/editor/find-replace.js',
            'app/scripts/superdesk-authoring/multiedit/multiedit.js',
            'app/scripts/superdesk-authoring/macros/macros.js',

            'app/scripts/superdesk-search/search.js',
            'app/scripts/superdesk-legal-archive/legal_archive.js',
            'app/scripts/superdesk-stream/stream.js',
            'app/scripts/superdesk-packaging/packaging.js',
            'app/scripts/superdesk-highlights/highlights.js',
            'app/scripts/superdesk-content-filters/content-filters.js',
            'app/scripts/superdesk-dictionaries/dictionaries.js',
            'app/scripts/superdesk-vocabularies/vocabularies.js',
            'app/scripts/superdesk-archive/directives.js',
            'app/scripts/superdesk/editor/spellcheck/spellcheck.js',

            'app/scripts/superdesk-monitoring/monitoring.js',
            'app/scripts/superdesk-monitoring/aggregate.js',
            'app/scripts/superdesk-monitoring/aggregate-widget/aggregate.js',
            'app/scripts/superdesk-workspace/workspace.js',

            'app/scripts/superdesk-settings/module.js',

            'app/scripts/superdesk-archive/controllers/baseList.js',
            'app/scripts/superdesk-archive/archive-widget/baseWidget.js',
            'app/scripts/superdesk-ingest/ingest-widget/ingest.js',
            'app/scripts/superdesk-ingest/ingest-stats-widget/stats.js',
            'app/scripts/superdesk-ingest/module.js',

            'app/scripts/superdesk-archive/module.js',
            'app/scripts/superdesk-archive/controllers/list.js',
            'app/scripts/superdesk-archive/controllers/upload.js',
            'app/scripts/superdesk-archive/archive-widget/archive.js',
            'app/scripts/superdesk-archive/related-item-widget/relatedItem.js',
            'app/scripts/superdesk-archive/directives.js',

            'app/scripts/superdesk-dashboard/widgets-provider.js',
            'app/scripts/superdesk-dashboard/world-clock/world-clock.js',
            'app/scripts/superdesk-dashboard/module.js',
            'app/scripts/superdesk-dashboard/sd-widget-directive.js',
            'app/scripts/superdesk-dashboard/grid/grid.js',

            'app/scripts/superdesk-search-providers/module.js',

            // must be loaded after app includes, but before spec includes
            //'app/scripts/superdesk/mocks.js', // fuck this thing

            // specs files
            // NOTE: uncommented are passing
            'app/scripts/superdesk-archive/controllers/upload_spec.js',
            'app/scripts/superdesk-archive/family_spec.js',
            'app/scripts/superdesk-archive/tests/archive_spec.js',
            'app/scripts/superdesk-authoring/comments/comments_spec.js',
            'app/scripts/superdesk-authoring/metadata/tests/MetadataWidgetCtrl_spec.js',
            'app/scripts/superdesk-authoring/multiedit/tests/multiedit_spec.js',
            'app/scripts/superdesk-authoring/tests/authoring_spec.js',
            'app/scripts/superdesk-authoring/widgets/widgets_spec.js',
            'app/scripts/superdesk-authoring/workqueue/tests/workqueue_spec.js',
            'app/scripts/superdesk-content-filters/tests/ContentFiltersConfigCtrl_spec.js',
            'app/scripts/superdesk-content-filters/tests/filters_spec.js',
            'app/scripts/superdesk-dashboard/widgets-provider_spec.js',
            'app/scripts/superdesk-dashboard/workspace-tasks/tests/tasks_spec.js',
            'app/scripts/superdesk-dashboard/world-clock/tests/tzdata_spec.js',
            'app/scripts/superdesk-dashboard/world-clock/tests/WorldClockConfigController_spec.js',
            'app/scripts/superdesk-dashboard/world-clock/tests/WorldClockController_spec.js',
            'app/scripts/superdesk-legal-archive/tests/legal_spec.js',
            'app/scripts/superdesk-publish/tests/publish_spec.js',
            'app/scripts/superdesk-search/tests/search_spec.js',
            'app/scripts/superdesk-search/tests/tags_spec.js',
            'app/scripts/superdesk-users/directives_spec.js',
            'app/scripts/superdesk-users/import/tests/import_spec.js',
            'app/scripts/superdesk-users/tests/sdUserPreferences_spec.js',
            'app/scripts/superdesk-users/tests/sdUserPrivileges_spec.js',
            'app/scripts/superdesk-users/tests/users_spec.js',
            'app/scripts/superdesk/activity/superdesk-service_spec.js',
            'app/scripts/superdesk/analytics/analytics_spec.js',
            'app/scripts/superdesk/api/api-service_spec.js',
            'app/scripts/superdesk/api/request-service_spec.js',
            'app/scripts/superdesk/api/timeout-interceptor_spec.js',
            'app/scripts/superdesk/api/url-resolver_spec.js',
            'app/scripts/superdesk/auth/auth-interceptor_spec.js',
            'app/scripts/superdesk/auth/auth-service_spec.js', // CONTAINS FAILS
            'app/scripts/superdesk/auth/basic-auth-adapter_spec.js',
            'app/scripts/superdesk/auth/session-service_spec.js', // CONTAINS FAILS
            'app/scripts/superdesk/auth/tests/auth_spec.js',
            'app/scripts/superdesk/beta/beta_spec.js',
            'app/scripts/superdesk/datetime/datetime_spec.js',
            'app/scripts/superdesk/elastic/es_spec.js',
            'app/scripts/superdesk/itemList/itemList_spec.js',
            'app/scripts/superdesk/list/list_spec.js',
            'app/scripts/superdesk/list/list-directives_spec.js',
            'app/scripts/superdesk/menu/notifications/notifications_spec.js',
            'app/scripts/superdesk/notification/tests/notification_spec.js',
            'app/scripts/superdesk/privileges/tests/privileges_spec.js',
            'app/scripts/superdesk/services/data_spec.js',
            'app/scripts/superdesk/services/permissions_spec.js',
            'app/scripts/superdesk/services/preferences_spec.js',
            'app/scripts/superdesk/services/storage_spec.js',
            'app/scripts/superdesk/services/workflow_spec.js',
            'app/scripts/superdesk/tests/filters_spec.js',
            'app/scripts/superdesk/ui/tests/ui_spec.js',
            'app/scripts/superdesk/upload/upload-service_spec.js',
        ],

        // list of files to exclude
        exclude: [
            'app/scripts/bower_components/**/*[sS]pec.js',
            'app/main.js'
        ],

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            moduleName: 'superdesk.templates-cache'
        },

        junitReporter: {
            outputFile: 'test-results.xml'
        },

        // test results reporter to use
        reporters: ['dots'],

        // web server port
        port: 8080,

        // cli runner port
        runnerPort: 9100,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        browsers: ['Chrome'],

        // Continuous Integration mode
        singleRun: false
    });
};
