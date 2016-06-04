"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tabs_1 = require('@angular2-material/tabs/tabs');
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var input_1 = require('@angular2-material/input/input');
var TabsDemo = (function () {
    function TabsDemo() {
        this.tabs = [
            { label: 'Tab One', content: 'This is the body of the first tab' },
            { label: 'Tab Two', content: 'This is the body of the second tab' },
            { label: 'Tab Three', content: 'This is the body of the third tab' },
        ];
    }
    TabsDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tab-group-demo',
            templateUrl: 'tab-group-demo.html',
            styleUrls: ['tab-group-demo.css'],
            directives: [tabs_1.MD_TABS_DIRECTIVES, toolbar_1.MdToolbar, input_1.MdInput],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], TabsDemo);
    return TabsDemo;
}());
exports.TabsDemo = TabsDemo;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/tabs/tab-group-demo.js.map