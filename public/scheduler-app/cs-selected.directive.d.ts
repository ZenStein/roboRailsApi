import { ElementRef, EventEmitter } from '@angular/core';
export declare class CsSelected {
    selectiontoggle: EventEmitter<{}>;
    private el;
    private selected;
    private id;
    constructor(el: ElementRef);
    setSelectionTo(ev: any): void;
    private toggle(ev);
}
