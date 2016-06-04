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
var input_1 = require('@angular2-material/input/input');
var button_1 = require('@angular2-material/button/button');
var card_1 = require('@angular2-material/card/card');
var checkbox_1 = require('@angular2-material/checkbox/checkbox');
var icon_1 = require('@angular2-material/icon/icon');
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var radio_1 = require('@angular2-material/radio/radio');
var radio_dispatcher_1 = require('@angular2-material/radio/radio_dispatcher');
var max = 5;
var EmployeeFormComponent = (function () {
    function EmployeeFormComponent() {
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.departments = [{ department: 'housekeeping', selection: false }, { department: 'office', selection: false }, { department: 'maintenance', selection: false }];
    }
    EmployeeFormComponent.prototype.ngOnInit = function () {
        console.log('initis ');
    };
    EmployeeFormComponent.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    EmployeeFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'employee-form',
            templateUrl: 'employee-form.component.html',
            styleUrls: ['employee-form.component.css'],
            providers: [radio_dispatcher_1.MdRadioDispatcher],
            directives: [common_1.FORM_DIRECTIVES, radio_1.MdRadioButton, radio_1.MdRadioGroup, card_1.MdCard, checkbox_1.MdCheckbox, button_1.MdButton, icon_1.MdIcon, toolbar_1.MdToolbar, input_1.MD_INPUT_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeFormComponent);
    return EmployeeFormComponent;
}());
exports.EmployeeFormComponent = EmployeeFormComponent;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/employee-form/employee-form.component.js.map