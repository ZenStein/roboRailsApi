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
var PrettyHousekeepingAssignments = (function () {
    function PrettyHousekeepingAssignments() {
    }
    PrettyHousekeepingAssignments.prototype.transform = function (value, args) {
        console.log(value);
        console.log(args);
        if (typeof value == 'string') {
            var x = value.replace(/_/g, ' ');
            console.log(x);
            return x;
        }
        else {
            return false;
        }
    };
    PrettyHousekeepingAssignments = __decorate([
        core_1.Pipe({
            name: 'prettyHousekeepingAssignments'
        }), 
        __metadata('design:paramtypes', [])
    ], PrettyHousekeepingAssignments);
    return PrettyHousekeepingAssignments;
}());
exports.PrettyHousekeepingAssignments = PrettyHousekeepingAssignments;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/pretty-housekeeping-assignments.pipe.js.map