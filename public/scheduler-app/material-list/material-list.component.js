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
var grid_list_1 = require('@angular2-material/grid-list/grid-list');
var button_1 = require('@angular2-material/button/button');
var card_1 = require('@angular2-material/card/card');
var icon_1 = require('@angular2-material/icon/icon');
var CsMaterialListComponent = (function () {
    function CsMaterialListComponent() {
        this.tiles = [
            { text: 'Arr_1', cols: 1, rows: 4, color: 'lightblue' },
            { text: 'Dep_2', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'T.O._5', cols: 1, rows: 2, color: 'lightpink' },
            { text: 'Arr_1_2', cols: 1, rows: 2, color: '#DDBDF1' },
            { text: 'Arr_2_2', cols: 1, rows: 2, color: '#DDBDF1' },
        ];
        this.dogs = [
            { name: 'Terry', human: 'Kara' },
            { name: 'Terry', human: 'Kara' },
            { name: 'Patty', human: 'Jeremy' },
            { name: 'Tisha', human: 'Igor' },
            { name: 'Lauren', human: 'Ward' },
            { name: 'Pat/Leah', human: 'Rob' },
            { name: 'Claudia', human: 'Matias' },
            { name: 'Patty', human: 'Jeremy' },
            { name: 'Tisha', human: 'Igor' },
            { name: 'Lauren', human: 'Ward' },
            { name: 'Pat/Leah', human: 'Rob' },
            { name: 'Claudia', human: 'Matias' }
        ];
        this.fixedCols = 1;
        this.fixedRowHeight = 100;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
    CsMaterialListComponent.prototype.dragenterAlert = function (x) {
        console.log(x);
    };
    CsMaterialListComponent.prototype.dragenterAlert2 = function (x) {
        console.log(x);
    };
    CsMaterialListComponent.prototype.overDrag = function (x) {
        console.log(x, this);
    };
    CsMaterialListComponent.prototype.addTileCols = function () { this.tiles[2].cols++; };
    CsMaterialListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cs-material-list',
            templateUrl: 'material-list.component.html',
            styleUrls: ['material-list.component.css'],
            directives: [grid_list_1.MD_GRID_LIST_DIRECTIVES, button_1.MdButton, card_1.MD_CARD_DIRECTIVES, icon_1.MdIcon],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], CsMaterialListComponent);
    return CsMaterialListComponent;
}());
exports.CsMaterialListComponent = CsMaterialListComponent;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/material-list/material-list.component.js.map