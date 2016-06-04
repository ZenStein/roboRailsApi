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
var cs_li_dragger_directive_1 = require('./cs-li-dragger.directive');
var list_model_service_1 = require('./list-model.service');
var cs_selected_directive_1 = require('./cs-selected.directive');
var list_dropper_directive_1 = require('./list-dropper.directive');
var list_controls_component_1 = require('./list-controls/list-controls.component');
var item_component_1 = require('./item/item.component');
//import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
//import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
var material_list_component_1 = require('./material-list/material-list.component');
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var sidenav_1 = require('@angular2-material/sidenav/sidenav');
var card_1 = require('@angular2-material/card/card');
var input_1 = require('@angular2-material/input/input');
var button_1 = require('@angular2-material/button/button');
var list_1 = require('@angular2-material/list/list');
var grid_list_1 = require('@angular2-material/grid-list/grid-list');
var icon_1 = require('@angular2-material/icon/icon');
//import {MdList} from '@angular2-material/list/list';
var uid_generator_1 = require('./uid-generator');
var drag_drop_model_template_1 = require('./drag-drop-model-template');
var RoboRenG2AppComponent = (function () {
    function RoboRenG2AppComponent(modelServ) {
        this.title = 'robo-ren-g2 works!';
        this.isValidDrop = false;
        this.canDropToList = false;
        //sortstatus(){
        //}
        //sortunit(){}
        //hidethird(){}
        this.tiles = [
            { text: 'Arr_1', cols: 1, rows: 4, color: 'lightblue' },
            { text: 'Dep_2', cols: 1, rows: 2, color: 'lightblue' },
            { text: 'T.O._5', cols: 1, rows: 2, color: 'lightblue' },
            { text: 'Arr_1_2', cols: 1, rows: 2, color: '#DDBDF1' },
            { text: 'Arr_2_2', cols: 1, rows: 2, color: '#DDBDF1' },
        ];
        this.fixedCols = 1;
        this.fixedRowHeight = 100;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
        this.modelService = modelServ;
        //this.modelService.
        //this.listsData = modelServ.getModel()
    }
    RoboRenG2AppComponent.prototype.onDrag = function (ev) {
        //ev.preventDefault()
        //return false
    };
    RoboRenG2AppComponent.prototype.ngOnInit = function () {
        var that = this;
        this.modelService.getModelFromTemplate().subscribe(function (data) {
            console.log('3 layer');
            console.log(data);
            that.listsData = data;
        });
    };
    //  data = [ ['header1','AAA','BBB','fff','hhh'],
    //           ['List 2','CCC','DDD'],
    //           ['header3','XXX','ZZZ'] 
    //         ]
    // modelService = new ListModelService()
    //    templateBuilder = new DragDropModelTemplate(this.data)
    //    listsData = this.modelService.model = this.templateBuilder.conformModel() 
    RoboRenG2AppComponent.prototype.onDragStart = function (ev) {
        this.modelService.doSet(ev.target.id, 'selected', true);
        this.theDragged = ev.target.id;
        this.modelService.mapSelectedInModel();
    };
    RoboRenG2AppComponent.prototype.onDragEnter = function (ev) { };
    RoboRenG2AppComponent.prototype.onDragOver = function (ev) { };
    RoboRenG2AppComponent.prototype.onDragLeave = function (ev) { };
    RoboRenG2AppComponent.prototype.onDrop = function (ev) {
        // alert('drop')
        // console.log('dropev')
        // console.log(ev)
        ev.preventDefault();
        if (this.isValidDrop || this.canDropToList) {
            this.modelService.doDropData(ev.target.id, this.canDropToList);
            this.modelService.resetAllSelectionsToFalse();
        }
        this.modelService.doSet(this.theDragged, 'selected', false);
        this.modelService.flushSelectedLineup();
        this.listsData = this.modelService.getModel();
    };
    RoboRenG2AppComponent.prototype.onDragEnd = function (ev) {
        // ev.preventDefault()
        if (this.isValidDrop) {
            console.log('dragend false');
            return false;
        }
        else {
            this.modelService.doSet(this.theDragged, 'selected', false);
            this.modelService.flushSelectedLineup();
            this.listsData = this.modelService.getModel();
        }
        return false;
    };
    RoboRenG2AppComponent.prototype.selectionMade = function (data) {
        this.modelService.doSet(data.id, 'selected', data.selectionMade, data.shiftKey);
    };
    RoboRenG2AppComponent.prototype.whichList = function (listUid) {
        var x = listUid.replace(/_[\d]*/g, '');
        return x;
    };
    RoboRenG2AppComponent.prototype.whichIndex = function (listUid) {
        var x = listUid.replace(/[\d]*_/g, '');
        return x;
    };
    RoboRenG2AppComponent.prototype.setIsValidDrop = function (validation) {
        console.log('isvaliddropfire');
        console.log(validation);
        this.canDropToList = false;
        this.isValidDrop = validation;
    };
    RoboRenG2AppComponent.prototype.setCanDropToList = function (ev) {
        this.canDropToList = ev.canDropToList;
    };
    RoboRenG2AppComponent.prototype.addList = function (ev) {
        this.listsData = this.modelService.addListToModel();
        console.log('addlist hit');
    };
    RoboRenG2AppComponent.prototype.refreshAllAssignments = function (ev) {
        console.log('refreshall');
        console.log(ev);
        this.listsData = this.modelService.refreshAllAssignments();
    };
    RoboRenG2AppComponent.prototype.addTileCols = function () { this.tiles[2].cols++; };
    RoboRenG2AppComponent = __decorate([
        core_1.Component({
            host: {
                '(dragstart)': 'onDragStart($event)',
                '(dragenter)': 'onDragEnter($event)',
                // '(dragover)' : 'onDragOver($event)',
                '(dragleave)': 'onDragLeave($event)',
                '(drop)': 'onDrop($event)',
                '(drag)': 'onDrag($event)',
                '(dragend)': 'onDragEnd($event)' //,
            },
            moduleId: module.id,
            providers: [list_model_service_1.ListModelService, uid_generator_1.UidGenerator, drag_drop_model_template_1.DragDropModelTemplate, icon_1.MdIconRegistry],
            selector: 'robo-ren-g2-app',
            directives: [[cs_li_dragger_directive_1.CsLiDragger], [cs_selected_directive_1.CsSelected], [list_dropper_directive_1.ListDropper], [common_1.NgClass], [list_controls_component_1.ListControlsComponent], [item_component_1.ItemComponent],
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                grid_list_1.MD_GRID_LIST_DIRECTIVES,
                [card_1.MD_CARD_DIRECTIVES],
                toolbar_1.MdToolbar,
                button_1.MdButton,
                icon_1.MdIcon,
                input_1.MdInput,
                [material_list_component_1.CsMaterialListComponent],
            ],
            templateUrl: 'robo-ren-g2.component.html',
            styleUrls: ['robo-ren-g2.component.css']
        }), 
        __metadata('design:paramtypes', [list_model_service_1.ListModelService])
    ], RoboRenG2AppComponent);
    return RoboRenG2AppComponent;
}());
exports.RoboRenG2AppComponent = RoboRenG2AppComponent;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/robo-ren-g2.component.js.map