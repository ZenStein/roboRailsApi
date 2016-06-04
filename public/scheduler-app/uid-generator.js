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
var UidGenerator = (function () {
    function UidGenerator() {
        //listNameUids = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        this.listNameUids = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
    }
    UidGenerator.prototype.generate = function (listId, listItemNumber) {
        var index = (listId % 26) | 0;
        //let listUid = this.listNameUids[index]
        var listUid = '' + index; // this.listNameUids[index]
        if (listId > 25) {
            var times = Math.floor(listId / 26);
            listUid = this.cycle(listUid, times);
        }
        if (typeof listItemNumber == 'number') {
            console.log('did pass in number to generator');
            listUid = listUid + '_' + listItemNumber;
        }
        return listUid;
    };
    UidGenerator.prototype.cycle = function (letter, iteratorCount) {
        if (iteratorCount < 1) {
            return letter;
        }
        var theLetter = letter;
        for (var x = 0; x < iteratorCount; x++) {
            theLetter = theLetter + '' + letter;
        }
        return theLetter;
    };
    UidGenerator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UidGenerator);
    return UidGenerator;
}());
exports.UidGenerator = UidGenerator;
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/uid-generator.js.map