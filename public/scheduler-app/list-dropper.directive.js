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
var ListDropper = (function () {
    function ListDropper() {
        this.listDropperIsDragged = new core_1.EventEmitter();
    }
    //private el
    //  constructor(el: ElementRef) {
    //     this.el = el.nativeElement
    // }
    //onDrop(ev){
    //    ev.preventDefault()
    //    alert('this list drop')
    //}
    ListDropper.prototype.onDragEnter = function (ev) {
        ev.preventDefault();
        //    console.log('dragEnter list')
        //    this.el.style.color = 'green'
        this.listDropperIsDragged.emit({ canDropToList: true });
    };
    ListDropper.prototype.onDragOver = function (ev) {
        ev.preventDefault();
        //    console.log('dlist over')
        this.listDropperIsDragged.emit({ canDropToList: true });
    };
    ListDropper.prototype.onDragLeave = function () {
        //  console.log('dragLeave list')
        //    this.el.style.color = 'black'
        this.listDropperIsDragged.emit({ canDropToList: false });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListDropper.prototype, "listDropperIsDragged", void 0);
    ListDropper = __decorate([
        core_1.Directive({
            selector: '[ListDropper]',
            host: {
                '(dragenter)': 'onDragEnter($event)',
                //  '(drop)':'onDrop($event)',
                '(dragleave)': 'onDragLeave($event)',
                '(dragover)': 'onDragOver($event)'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], ListDropper);
    return ListDropper;
}());
exports.ListDropper = ListDropper;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/list-dropper.directive.js.map