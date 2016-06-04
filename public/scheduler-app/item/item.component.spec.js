"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var item_component_1 = require('./item.component');
testing_1.describe('Component: Item', function () {
    var builder;
    testing_1.beforeEachProviders(function () { return [item_component_1.ItemComponent]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    testing_1.it('should inject the component', testing_1.inject([item_component_1.ItemComponent], function (component) {
        /*fix this*/ testing_1.expect(true).toBeTruthy();
    }));
    //  it('should create the component', inject([], () => {
    //    return builder.createAsync(ItemComponentTestController)
    //      .then((fixture: ComponentFixture<any>) => {
    //        let query = fixture.debugElement.query(By.directive(ItemComponent));
    //        expect(query).toBeTruthy();
    //        expect(query.componentInstance).toBeTruthy();
    //      });
    //  }));
});
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/item/item.component.spec.js.map