"use strict";
var testing_1 = require('@angular/core/testing');
var pretty_housekeeping_assignments_pipe_1 = require('./pretty-housekeeping-assignments.pipe');
testing_1.describe('PrettyHousekeepingAssignments Pipe', function () {
    testing_1.beforeEachProviders(function () { return [pretty_housekeeping_assignments_pipe_1.PrettyHousekeepingAssignments]; });
    testing_1.it('return false if not passed a string', testing_1.inject([pretty_housekeeping_assignments_pipe_1.PrettyHousekeepingAssignments], function (pipe) {
        testing_1.expect(pipe.transform(true)).toBe(false);
    }));
    testing_1.it('remove underscores', testing_1.inject([pretty_housekeeping_assignments_pipe_1.PrettyHousekeepingAssignments], function (pipe) {
        var x = ['12_T.O._1', '0_Arr_1', '10_Dep_-'];
        testing_1.expect(pipe.transform(x[0])).toBe('12 T.O. 1');
        testing_1.expect(pipe.transform(x[1])).toBe('0 Arr 1');
        testing_1.expect(pipe.transform(x[2])).toBe('10 Dep -');
    }));
});
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/pretty-housekeeping-assignments.pipe.spec.js.map