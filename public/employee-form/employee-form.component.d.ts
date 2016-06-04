import { OnInit } from '@angular/core';
export declare class EmployeeFormComponent implements OnInit {
    requiredField: boolean;
    floatingLabel: boolean;
    name: string;
    items: any[];
    departments: Object[];
    ngOnInit(): void;
    addABunch(n: number): void;
}
