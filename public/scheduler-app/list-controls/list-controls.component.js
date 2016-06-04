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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var list_model_service_1 = require('../list-model.service');
//import { data } from '../mock-data.ts';
var ListControlsComponent = (function () {
    function ListControlsComponent(listService) {
        this.addlist = new core_1.EventEmitter();
        this.refreshallassigments = new core_1.EventEmitter();
        this.model = listService;
    }
    ListControlsComponent.prototype.ngOnInit = function () {
        console.log("this in lists controls");
        console.log(this.model.getModel());
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListControlsComponent.prototype, "addlist", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListControlsComponent.prototype, "refreshallassigments", void 0);
    ListControlsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            host: {},
            providers: [list_model_service_1.ListModelService],
            selector: 'list-controls',
            templateUrl: 'list-controls.component.html',
            styleUrls: ['list-controls.component.css']
        }),
        __param(0, core_1.Inject(list_model_service_1.ListModelService)), 
        __metadata('design:paramtypes', [list_model_service_1.ListModelService])
    ], ListControlsComponent);
    return ListControlsComponent;
}());
exports.ListControlsComponent = ListControlsComponent;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-5oZEtF82.tmp/0/scheduler-app/list-controls/list-controls.component.js.map