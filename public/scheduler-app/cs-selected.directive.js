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
var CsSelected = (function () {
    function CsSelected(el) {
        this.selectiontoggle = new core_1.EventEmitter();
        this.el = el.nativeElement;
        this.id = this.el.id;
    }
    CsSelected.prototype.setSelectionTo = function (ev) {
        console.log('set select in SELECTION ev below');
        console.log(ev);
        this.selected = ev;
    };
    CsSelected.prototype.toggle = function (ev) {
        console.log('hit');
        console.log(ev);
        console.log(ev.shiftKey);
        this.selected = !this.selected;
        ev.preventDefault();
        this.selectiontoggle.emit({ id: this.el.id, selectionMade: this.selected, shiftKey: ev.shiftKey });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CsSelected.prototype, "selectiontoggle", void 0);
    CsSelected = __decorate([
        core_1.Directive({
            selector: '[csSelected]',
            host: {
                '(click)': 'toggle($event)',
                '(selectionChange)': 'setSelectionTo($event)'
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CsSelected);
    return CsSelected;
}());
exports.CsSelected = CsSelected;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/cs-selected.directive.js.map