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
var CsLiDragger = (function () {
    function CsLiDragger(el) {
        this.el = el;
        this.selected = false;
        this.dropspotvalid = new core_1.EventEmitter();
        this.selectionChange = new core_1.EventEmitter();
        this.el = el;
        el.nativeElement.draggable = true;
    }
    CsLiDragger.prototype.setSelected = function (ev) {
        console.log('this on selection in dragger');
        console.log(this);
        this.selected = ev.selectionMade;
        if (this.selected) {
            this.includeClass('is-selected');
        }
        else {
            this.removeCLass('is-selected');
        }
        console.log('set SELECTED CALLLED');
    };
    CsLiDragger.prototype.onDragLeave = function (ev) {
        console.log('drag leave');
        this.removeCLass('dragged-over');
        this.dropspotvalid.emit(false);
    };
    CsLiDragger.prototype.onDrop = function (ev) {
        this.removeCLass('dragged-over');
    };
    CsLiDragger.prototype.onDragEnd = function (ev) {
        ev.preventDefault();
        this.dropspotvalid.emit(false);
        this.selected = false;
        this.selectionChange.emit(false);
        this.removeCLass('dragged-over');
    };
    CsLiDragger.prototype.onDragEnter = function (ev) {
        if (this.selected) {
            this.dropspotvalid.emit(false);
        }
        else {
            this.includeClass('dragged-over');
            this.dropspotvalid.emit(true);
        }
    };
    CsLiDragger.prototype.onDragOver = function (ev) {
        console.log('dragover');
        ev.preventDefault();
        if (this.selected) {
            this.dropspotvalid.emit(false);
        }
        else {
            this.dropspotvalid.emit(true);
        }
    };
    CsLiDragger.prototype.onDragStart = function (ev) {
        console.log(this);
        this.selected = true;
        this.selectionChange.emit(true);
        ev.dataTransfer.effectAllowed = 'move';
    };
    CsLiDragger.prototype.classContains = function (cssClass) {
        if (this.el.nativeElement.className.match(cssClass)) {
            return true;
        }
        else {
            return false;
        }
    };
    CsLiDragger.prototype.includeClass = function (cssClass) {
        this.el.nativeElement.className += " " + cssClass;
    };
    CsLiDragger.prototype.removeCLass = function (cssClass) {
        var x = new RegExp(" " + cssClass, 'g');
        this.el.nativeElement.className = this.el.nativeElement.className.replace(x, '');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CsLiDragger.prototype, "dropspotvalid", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CsLiDragger.prototype, "selectionChange", void 0);
    CsLiDragger = __decorate([
        core_1.Directive({
            selector: '[csDragger]',
            host: {
                '(dragstart)': 'onDragStart($event)',
                '(dragenter)': 'onDragEnter($event)',
                '(dragleave)': 'onDragLeave($event)',
                '(dragover)': 'onDragOver($event)',
                '(dragend)': 'onDragEnd($event)',
                '(drop)': 'onDrop($event)',
                '(selectionToggle)': 'setSelected($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CsLiDragger);
    return CsLiDragger;
}());
exports.CsLiDragger = CsLiDragger;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/cs-li-dragger.directive.js.map