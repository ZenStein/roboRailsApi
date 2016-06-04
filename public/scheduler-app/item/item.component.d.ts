import { EventEmitter, OnInit } from '@angular/core';
export declare class ItemComponent implements OnInit {
    selectionToggle: EventEmitter<{}>;
    dropSpotValid: EventEmitter<{}>;
    viewText: any;
    uid: any;
    index: any;
    selected: any;
    private validDrop;
    constructor();
    ngOnInit(): void;
    onselectiontoggle(ev: any): void;
    ondropspotvalid(ev: any): void;
}
