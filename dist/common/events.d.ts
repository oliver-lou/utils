export declare class CommonEvent {
    events: any;
    $on(event: string | Array<string>, fn: Function): this;
    $off(event?: string | Array<string>, fn?: Function): this;
    $once(event: string, fn: Function): this;
    $emit(event: string): this;
}
