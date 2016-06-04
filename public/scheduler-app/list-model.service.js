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
var drag_drop_model_template_1 = require('./drag-drop-model-template');
//@Component({
//providers:[DragDropModelTemplate]
//})
var ListModelService = (function () {
    function ListModelService(tmplBuilder) {
        this.locatorsMap = [];
        this.injectionBlock = [];
        this.lastSetCoordinates = [];
        this.tmplBuilder = tmplBuilder;
        //   this.tmplBuilder.setModel(data)
        //    this.model = this.tmplBuilder.conformModel()
    }
    ListModelService.prototype.getModelFromTemplate = function () {
        var that = this;
        return this.tmplBuilder.getRemoteDataForModel().map(function (d) {
            that.model = d;
            return d;
        });
        //.subscribe(function(data){
        // console.log('model service2')
        // console.log(data)
        // })
    };
    ListModelService.prototype.resetAllSelectionsToFalse = function (inverse) {
        var selectionState = (inverse == 'inverse' ? true : false);
        this.modelIterator(function (item) {
            item.selected = selectionState;
        });
    };
    ListModelService.prototype.doSet = function (uid, prop, value, shiftKey) {
        var list = this.parseToList(uid);
        var item = this.parseToListItem(uid);
        if (this.model[list] != undefined) {
            if (this.model[list].listItems[item] != undefined) {
                if (shiftKey && this.validateMultiSelection(list, item)) {
                    this.doMultiSelection(list, item, this.lastSetCoordinates[1], prop, value);
                }
                else {
                    this.model[list].listItems[item][prop] = value;
                }
                this.lastSetCoordinates = [list, item];
                return value;
            }
        }
    };
    ListModelService.prototype.modelIterator = function (callback) {
        for (var i = 0; i < this.model.length; i++) {
            for (var j = 0; j < this.model[i].listItems.length; j++) {
                if (callback(this.model[i].listItems[j], i, j) == 'done') {
                    i = 0;
                    break;
                }
            }
        }
    };
    ListModelService.prototype.mapSelectedInModel = function () {
        var locatorsMap = this.locatorsMap;
        var that = this;
        this.modelIterator(function (listItem, listIndex, itemIndex) {
            if (listItem.selected) {
                var dexes = { listDx: listIndex, itemDx: itemIndex };
                that.locatorsMap.push(dexes);
                var listItemClone = Object.assign({}, listItem);
                that.injectionBlock.push(listItemClone);
            }
        });
        return this.injectionBlock;
    };
    ListModelService.prototype.flushSelectedLineup = function () {
        this.injectionBlock = [];
        this.locatorsMap = [];
    };
    ListModelService.prototype.doDropData = function (whereUid, emptyList) {
        console.log('diddrop');
        console.log(whereUid);
        var indexs = this.parseLocationFor(whereUid, emptyList);
        var injectDx = indexs.itemDx;
        var model = this.model;
        var that = this;
        var _loop_1 = function(aRemovable) {
            var remove = this_1.injectionBlock[aRemovable];
            this_1.modelIterator(function (item, listIndex, itemIndex) {
                if (item.uid == remove.uid && item.viewText == remove.viewText) {
                    that.model[listIndex].listItems.splice(itemIndex, 1);
                    return 'done';
                }
            });
        };
        var this_1 = this;
        for (var aRemovable in this.injectionBlock) {
            _loop_1(aRemovable);
        }
        var targetLen = model[indexs.listDx].listItems.length;
        var injector = [injectDx, 0].concat(this.injectionBlock);
        Array.prototype.splice.apply(model[indexs.listDx].listItems, injector);
        this.modelIterator(function (item, listIndex, itemIndex) {
            item.uid = listIndex + "_" + itemIndex;
        });
        this.injectionBlock = [];
        return this.model;
    };
    ListModelService.prototype.getModel = function () {
        return this.model;
    };
    ListModelService.prototype.parseToList = function (listUid) {
        var x = listUid.replace(/_[\d]*/g, '');
        return x;
    };
    ListModelService.prototype.parseToListItem = function (listUid) {
        var x = listUid.replace(/[\d]*_/g, '');
        return x;
    };
    ListModelService.prototype.parseLocationFor = function (uid, emptyList) {
        var itemDx = emptyList == true ? 0 : parseInt(this.parseToListItem(uid));
        var x = {
            listDx: parseInt((this.parseToList(uid)).toString()),
            itemDx: itemDx
        };
        console.log('x');
        console.log(x);
        return x;
    };
    //    parseListLocation(uid){
    //        return {
    //        listDx:
    //        }
    //    }
    ListModelService.prototype.addListToModel = function () {
        var list = this.tmplBuilder.getListTemplate();
        list.header = 'new list';
        list.listUid = '' + this.model.length;
        this.appendList(list);
        return this.model;
    };
    ListModelService.prototype.appendList = function (list) {
        this.model.push(list);
    };
    ListModelService.prototype.refreshAllAssignments = function () {
        this.resetAllSelectionsToFalse('inverse');
        this.mapSelectedInModel();
        this.doDropData('0_list', true);
        this.resetAllSelectionsToFalse();
        return this.model;
    };
    ListModelService.prototype.validateMultiSelection = function (list, item) {
        var valid = false;
        if (this.lastSetCoordinates[0] == list) {
            valid = true;
        }
        return valid;
    };
    ListModelService.prototype.doMultiSelection = function (list, itemDx, previousDx, prop, value) {
        console.log('orig prev' + previousDx);
        console.log('orig item' + itemDx);
        var lowest, highest;
        lowest = (previousDx < itemDx) ? previousDx : itemDx;
        console.log('lowest immed = ' + lowest);
        highest = (lowest == previousDx) ? itemDx : previousDx;
        console.log('lowest = ' + lowest);
        console.log('highest = ' + highest);
        console.log('prev = ' + previousDx);
        console.log('itemdx = ' + itemDx);
        var that = this;
        this.modelIterator(function (listItem, listIndex, itemIndex) {
            if (list == listIndex && itemIndex >= lowest && itemIndex <= highest) {
                that.model[listIndex].listItems[itemIndex][prop] = value;
            }
        });
    };
    ListModelService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(drag_drop_model_template_1.DragDropModelTemplate)), 
        __metadata('design:paramtypes', [drag_drop_model_template_1.DragDropModelTemplate])
    ], ListModelService);
    return ListModelService;
}());
exports.ListModelService = ListModelService;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/list-model.service.js.map