declare namespace LocalStorage {
    let length: number;
    function getItem(key: string): string;
    function setItem(key: string, value: any): void;
    function removeItem(key: string): void;
    function clear(): undefined;
    function getLength(): number;
    function key(n: number): string | null;
}
export = LocalStorage;
