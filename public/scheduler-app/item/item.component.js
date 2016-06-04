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
var common_1 = require('@angular/common');
var cs_li_dragger_directive_1 = require('../cs-li-dragger.directive');
var cs_selected_directive_1 = require('../cs-selected.directive');
var pretty_housekeeping_assignments_pipe_1 = require('../pretty-housekeeping-assignments.pipe');
var ItemComponent = (function () {
    function ItemComponent() {
        this.selectionToggle = new core_1.EventEmitter();
        this.dropSpotValid = new core_1.EventEmitter();
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.onselectiontoggle = function (ev) {
        this.selected = ev.selectionMade;
        this.selectionToggle.emit(ev);
    };
    ItemComponent.prototype.ondropspotvalid = function (ev) {
        console.log('ondropspotvalid');
        this.validDrop = ev;
        this.dropSpotValid.emit(ev);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "selectionToggle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "dropSpotValid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "viewText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "uid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "index", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemComponent.prototype, "selected", void 0);
    ItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            host: {},
            selector: 'cs-item',
            directives: [[cs_li_dragger_directive_1.CsLiDragger], [cs_selected_directive_1.CsSelected], [common_1.NgClass]],
            templateUrl: 'item.component.html',
            pipes: [pretty_housekeeping_assignments_pipe_1.PrettyHousekeepingAssignments],
            styleUrls: ['item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-kKTroq2p.tmp/0/scheduler-app/item/item.component.js.map