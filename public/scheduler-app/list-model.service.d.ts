import { DragDropModelTemplate } from './drag-drop-model-template';
export declare class ListModelService {
    private locatorsMap;
    private injectionBlock;
    private selectedItemsCollection;
    private lastSetCoordinates;
    private tmplBuilder;
    private model;
    constructor(tmplBuilder: DragDropModelTemplate);
    getModelFromTemplate(): any;
    resetAllSelectionsToFalse(inverse?: string): void;
    doSet(uid: string, prop: string, value: string | boolean, shiftKey: boolean): string | boolean;
    private modelIterator(callback);
    mapSelectedInModel(): any[];
    flushSelectedLineup(): void;
    doDropData(whereUid: string, emptyList: boolean): any;
    getModel(): any;
    parseToList(listUid: any): any;
    parseToListItem(listUid: any): any;
    private parseLocationFor(uid, emptyList);
    addListToModel(): any;
    private appendList(list);
    refreshAllAssignments(): any;
    validateMultiSelection(list: any, item: any): boolean;
    doMultiSelection(list: any, itemDx: any, previousDx: any, prop: any, value: any): void;
}
