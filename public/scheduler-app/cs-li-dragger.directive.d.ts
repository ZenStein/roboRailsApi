import { ElementRef, EventEmitter } from '@angular/core';
export declare class CsLiDragger {
    private el;
    private selected;
    dropspotvalid: EventEmitter<{}>;
    selectionChange: EventEmitter<{}>;
    constructor(el: ElementRef);
    setSelected(ev: any): void;
    onDragLeave(ev: any): void;
    onDrop(ev: any): void;
    onDragEnd(ev: any): void;
    onDragEnter(ev: any): void;
    onDragOver(ev: any): void;
    onDragStart(ev: any): void;
    classContains(cssClass: string): boolean;
    includeClass(cssClass: string): void;
    removeCLass(cssClass: string): void;
}
