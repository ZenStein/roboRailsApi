import { Portal } from '@angular2-material/core/portal/portal';
import { QueryList } from '@angular/core';
import { ComponentPortal } from '@angular2-material/core/portal/portal';
export declare class PortalDemo {
    templatePortals: QueryList<Portal<any>>;
    selectedPortal: Portal<any>;
    programmingJoke: Portal<any>;
    mathJoke: Portal<any>;
    scienceJoke: ComponentPortal;
}
