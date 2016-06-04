export declare class UidGenerator {
    listNameUids: string[];
    generate(listId: number, listItemNumber?: number): string;
    cycle(letter: string, iteratorCount: number): string;
}
