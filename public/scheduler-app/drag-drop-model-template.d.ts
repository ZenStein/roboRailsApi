import { UidGenerator } from './uid-generator';
import { Http } from '@angular/http';
export declare class DragDropModelTemplate {
    private _http;
    model: any;
    conformed: any;
    conformedModel: any;
    idGenerator: any;
    constructor(idgen: UidGenerator, _http: Http);
    private getRemoteDataForModel();
    setModel(model: any): void;
    getModel(conformed?: boolean): any;
    conformModel(): any;
    private getListTemplate();
    private getListItemTemplate();
    tester(): void;
    private conformFromArrayStrings();
}
