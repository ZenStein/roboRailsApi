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
var overlay_1 = require('@angular2-material/core/overlay/overlay');
var portal_1 = require('@angular2-material/core/portal/portal');
var OverlayDemo = (function () {
    function OverlayDemo(overlay, viewContainerRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nextPosition = 0;
        this.isMenuOpen = false;
    }
    OverlayDemo.prototype.openRotiniPanel = function () {
        var _this = this;
        var config = new overlay_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(this.nextPosition + "px")
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        this.overlay.create(config).then(function (ref) {
            ref.attach(new portal_1.ComponentPortal(RotiniPanel, _this.viewContainerRef));
        });
    };
    OverlayDemo.prototype.openFusilliPanel = function () {
        var _this = this;
        var config = new overlay_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        this.overlay.create(config).then(function (ref) {
            ref.attach(_this.templatePortals.first);
        });
    };
    OverlayDemo.prototype.openSpaghettiPanel = function () {
        var _this = this;
        // TODO(jelbourn): separate overlay demo for connected positioning.
        var strategy = this.overlay.position()
            .connectedTo(this._overlayOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
        var config = new overlay_1.OverlayState();
        config.positionStrategy = strategy;
        this.overlay.create(config).then(function (ref) {
            ref.attach(new portal_1.ComponentPortal(SpagettiPanel, _this.viewContainerRef));
        });
    };
    __decorate([
        core_1.ViewChildren(portal_1.TemplatePortalDirective), 
        __metadata('design:type', core_1.QueryList)
    ], OverlayDemo.prototype, "templatePortals", void 0);
    __decorate([
        core_1.ViewChild(overlay_1.OverlayOrigin), 
        __metadata('design:type', overlay_1.OverlayOrigin)
    ], OverlayDemo.prototype, "_overlayOrigin", void 0);
    OverlayDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'overlay-demo',
            templateUrl: 'overlay-demo.html',
            styleUrls: ['overlay-demo.css'],
            directives: [portal_1.PORTAL_DIRECTIVES, overlay_1.OVERLAY_DIRECTIVES],
            providers: [overlay_1.OVERLAY_PROVIDERS],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [overlay_1.Overlay, core_1.ViewContainerRef])
    ], OverlayDemo);
    return OverlayDemo;
}());
exports.OverlayDemo = OverlayDemo;
/** Simple component to load into an overlay */
var RotiniPanel = (function () {
    function RotiniPanel() {
        this.value = 9000;
    }
    RotiniPanel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rotini-panel',
            template: '<p class="demo-rotini">Rotini {{value}}</p>'
        }), 
        __metadata('design:paramtypes', [])
    ], RotiniPanel);
    return RotiniPanel;
}());
/** Simple component to load into an overlay */
var SpagettiPanel = (function () {
    function SpagettiPanel() {
        this.value = 'Omega';
    }
    SpagettiPanel = __decorate([
        core_1.Component({
            selector: 'spagetti-panel',
            template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], SpagettiPanel);
    return SpagettiPanel;
}());
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/overlay/overlay-demo.js.map