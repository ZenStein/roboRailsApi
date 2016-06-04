//import {
//  describe,
//  ddescribe,
//  expect,
//  iit,
//  it
//} from '@angular/core/testing';
//import {DragDropModelTemplate} from './drag-drop-model-template';
//
//describe('DragDropModelTemplate', () => {
//
//    it('should create an instance with different datasets', () => {
//    expect( new DragDropModelTemplate([{header:''},{}])).toBeTruthy();
//    expect( new DragDropModelTemplate([ ['a','b','c'],['a','b','c'] ])).toBeTruthy();
//    });
//    
//    it('should return a different template from same instance', () => {
//        let tt = new DragDropModelTemplate([{header:'',listItem:[]},{header:'',listItem:[]}])
//        let xx = tt.getListTemplate()
//        let yy = tt.getListTemplate()
//        xx.header = 'xx header xx'
//        yy.header = 'yy header yy'
//        expect(xx.header).toEqual('xx header xx');
//        expect(yy.header).toEqual('yy header yy');
//    });
//
//    it('put each index[0] in header ', () => {
//        let x = new DragDropModelTemplate([ ['a','b','c'],['x','y','z'] ])
//
//      expect(x.conformModel()[0].header).toEqual('a');
//      expect(x.conformModel()[1].header).toEqual('x');
//      expect(x.conformModel()[0].listItems[1].viewText).toEqual('c');
//      expect(x.conformModel()[1].listItems[1].uid).toEqual('1_1');
//    });
//});
//
//
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/scheduler-app/drag-drop-model-template.spec.js.map