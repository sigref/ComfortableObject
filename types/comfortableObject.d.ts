interface IConstractorArg {
    clone?: boolean;
    entries?: boolean;
    keys?: boolean;
    length?: boolean;
    size?: boolean;
    values?: boolean;
}

interface IComfortableObject extends Object {
    clone?: {get: any};
    entries?: {get: [][]};
    keys?: {get: string[]};
    length?: {get: number};
    size?: {get: number};
    values?: {get: any[]};
}

interface IComfortableObjectClass {
    apply:(obj?: any) => void
}

