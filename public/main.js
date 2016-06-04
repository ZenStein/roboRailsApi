"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var overlay_1 = require('@angular2-material/core/overlay/overlay');
var live_announcer_1 = require('@angular2-material/core/live-announcer/live-announcer');
var overlay_container_1 = require('@angular2-material/core/overlay/overlay-container');
var icon_registry_1 = require('@angular2-material/icon/icon-registry');
var demo_app_1 = require('./demo-app/demo-app');
console.log(platform_browser_dynamic_1.bootstrap);
platform_browser_dynamic_1.bootstrap(demo_app_1.DemoApp, [
    //    [DragDropModelTemplate],
    //    [UidGenerator],
    router_1.ROUTER_PROVIDERS,
    live_announcer_1.MdLiveAnnouncer,
    core_1.provide(overlay_1.OVERLAY_CONTAINER_TOKEN, { useValue: overlay_container_1.createOverlayContainer() }),
    http_1.HTTP_PROVIDERS,
    icon_registry_1.MdIconRegistry,
    core_2.Renderer //,
]);
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/main.js.map