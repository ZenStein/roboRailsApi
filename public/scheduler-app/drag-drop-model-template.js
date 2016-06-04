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
var uid_generator_1 = require('./uid-generator');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var DragDropModelTemplate = (function () {
    function DragDropModelTemplate(idgen, _http) {
        this._http = _http;
        //this.model = data //[] //model    
        this.conformed = false;
        this.idGenerator = idgen; //new UidGenerator()
        // this.httpTest()
    }
    DragDropModelTemplate.prototype.getRemoteDataForModel = function () {
        // const headers = new Headers({'Access-Control-Allow-Origin':'http://localhost:4200'}) 
        // const opts = new RequestOptions({headers})
        //     http://www.cabins4lessapp.com/cabinStatusLinens.php
        var that = this;
        var url = 'http://www.cabins4lessapp.com/cabinStatusLinens.php';
        return this._http.get(url /*, opts*/).map(function (_a) {
            var _body = _a._body;
            var mdlDta = [];
            mdlDta[0] = ['assignments'];
            var rawDta = _body.split(',');
            var x, i, j;
            for (x = 0; x < rawDta.length; x += 3) {
                i = x + 1;
                j = x + 2;
                mdlDta[0].push(rawDta[x] + "_" + rawDta[i] + "_" + rawDta[j]);
            }
            that.model = mdlDta;
            //console.log(that.conformModel())
            return that.conformModel();
        });
        //.subscribe(function(res){
        //console.log('res one in template')
        //console.log(res)
        //})
    };
    DragDropModelTemplate.prototype.setModel = function (model) {
        this.model = model;
    };
    DragDropModelTemplate.prototype.getModel = function (conformed) {
        if (conformed) {
            if (!this.conformed) {
                throw 'this model has not been conformed. call conformedModel';
            }
            return this.conformedModel;
        }
        return this.model();
    };
    DragDropModelTemplate.prototype.conformModel = function () {
        this.conformFromArrayStrings();
        return this.conformedModel;
    };
    DragDropModelTemplate.prototype.getListTemplate = function () {
        return { header: '', listUid: '', listItems: [] };
    };
    DragDropModelTemplate.prototype.getListItemTemplate = function () {
        return { viewText: '', uid: '', selected: false };
    };
    DragDropModelTemplate.prototype.tester = function () { };
    DragDropModelTemplate.prototype.conformFromArrayStrings = function () {
        var build = [];
        var i = 0;
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var list = _a[_i];
            var listTmpl = this.getListTemplate();
            console.log(list);
            listTmpl.header = list[0];
            listTmpl.listUid = this.idGenerator.generate(i);
            for (var x = 1; x < list.length; x++) {
                var newListItem = this.getListItemTemplate();
                newListItem.viewText = list[x];
                newListItem.uid = this.idGenerator.generate(i, x - 1);
                listTmpl.listItems.push(newListItem);
                console.log(x);
            }
            build.push(listTmpl);
            i++;
        }
        this.conformed = true;
        this.conformedModel = build;
    };
    DragDropModelTemplate = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(uid_generator_1.UidGenerator)), 
        __metadata('design:paramtypes', [uid_generator_1.UidGenerator, http_1.Http])
    ], DragDropModelTemplate);
    return DragDropModelTemplate;
}());
exports.DragDropModelTemplate = DragDropModelTemplate;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/drag-drop-model-template.js.map