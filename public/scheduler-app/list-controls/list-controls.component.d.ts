import { EventEmitter, OnInit } from '@angular/core';
import { ListModelService } from '../list-model.service';
export declare class ListControlsComponent implements OnInit {
    addlist: EventEmitter<{}>;
    refreshallassigments: EventEmitter<{}>;
    private model;
    constructor(listService: ListModelService);
    ngOnInit(): void;
}
