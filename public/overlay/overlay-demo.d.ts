import { QueryList, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular2-material/core/overlay/overlay';
import { Portal } from '@angular2-material/core/portal/portal';
export declare class OverlayDemo {
    overlay: Overlay;
    viewContainerRef: ViewContainerRef;
    nextPosition: number;
    isMenuOpen: boolean;
    templatePortals: QueryList<Portal<any>>;
    private _overlayOrigin;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef);
    openRotiniPanel(): void;
    openFusilliPanel(): void;
    openSpaghettiPanel(): void;
}
