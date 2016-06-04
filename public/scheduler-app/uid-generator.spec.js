"use strict";
var testing_1 = require('@angular/core/testing');
var uid_generator_1 = require('./uid-generator');
testing_1.describe('UidGenerator', function () {
    testing_1.it('should create an instance', function () {
        testing_1.expect(new uid_generator_1.UidGenerator()).toBeTruthy();
    });
    testing_1.it('shoud generate an \'0\' when passed a 0', function () {
        var ctyle = new uid_generator_1.UidGenerator();
        testing_1.expect(ctyle.generate(0)).toEqual('0');
    });
    testing_1.it('should be 00 given(26)', function () {
        var ctyle = new uid_generator_1.UidGenerator();
        testing_1.expect(ctyle.generate(26)).toEqual('00');
    });
    testing_1.it('should be 0_0 given(0,0)', function () {
        var ctyle = new uid_generator_1.UidGenerator();
        testing_1.expect(ctyle.generate(0, 0)).toEqual('0_0');
    });
    testing_1.it('shoud generate an \'0_0\' when passed (0, 0)', function () {
        var ctyle = new uid_generator_1.UidGenerator();
        testing_1.expect(ctyle.generate(0, 1)).toEqual('0_1');
    });
    testing_1.it('should start with 00 when passed 26', function () {
        var ctyle = new uid_generator_1.UidGenerator();
        testing_1.expect(ctyle.generate(26, 1)).toEqual('00_1');
    });
    testing_1.it('should start with 11 when passed 27', function () {
        var ctyle = new uid_generator_1.UidGenerator();
        testing_1.expect(ctyle.generate(27, 1)).toEqual('11_1');
    });
    testing_1.it('should start with BB when passed 27', function () {
        var ctyle = new uid_generator_1.UidGenerator();
        testing_1.expect(ctyle.generate(52, 0)).toEqual('000_0');
    });
    testing_1.it('should be 2525_5 given(51,5)', function () {
        var ctyle = new uid_generator_1.UidGenerator();
        testing_1.expect(ctyle.generate(51, 5)).toEqual('2525_5');
    });
});
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/uid-generator.spec.js.map