import { EventEmitter } from '@angular/core';
export declare class ListDropper {
    listDropperIsDragged: EventEmitter<{}>;
    onDragEnter(ev: any): void;
    onDragOver(ev: any): void;
    onDragLeave(): void;
}
