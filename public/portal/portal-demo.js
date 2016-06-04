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
var portal_directives_1 = require('@angular2-material/core/portal/portal-directives');
var portal_directives_2 = require('@angular2-material/core/portal/portal-directives');
var core_2 = require('@angular/core');
var core_3 = require('@angular/core');
var portal_1 = require('@angular2-material/core/portal/portal');
var PortalDemo = (function () {
    function PortalDemo() {
    }
    Object.defineProperty(PortalDemo.prototype, "programmingJoke", {
        get: function () {
            return this.templatePortals.first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalDemo.prototype, "mathJoke", {
        get: function () {
            return this.templatePortals.last;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalDemo.prototype, "scienceJoke", {
        get: function () {
            return new portal_1.ComponentPortal(ScienceJoke);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_2.ViewChildren(portal_directives_2.TemplatePortalDirective), 
        __metadata('design:type', core_3.QueryList)
    ], PortalDemo.prototype, "templatePortals", void 0);
    PortalDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'portal-demo',
            templateUrl: 'portal-demo.html',
            styleUrls: ['portal-demo.css'],
            directives: [portal_directives_2.TemplatePortalDirective, portal_directives_1.PortalHostDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], PortalDemo);
    return PortalDemo;
}());
exports.PortalDemo = PortalDemo;
var ScienceJoke = (function () {
    function ScienceJoke() {
    }
    ScienceJoke = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'science-joke',
            template: "<p> 100 kilopascals go into a bar. </p>"
        }), 
        __metadata('design:paramtypes', [])
    ], ScienceJoke);
    return ScienceJoke;
}());
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/portal/portal-demo.js.map