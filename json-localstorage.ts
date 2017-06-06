import fs = require('fs');
import path = require('path');

let config = require('./package.json').config;

namespace LocalStorage {

    export let length: number = getLength();

    export function getItem(key: string): string {
        return getStoredItems()[key] || null;
    }

    export function setItem(key: string, value: any): void {
        let obj = getStoredItems();
        obj[key] = value;
        length = countKeys(obj);
        writeFile(obj);
    }

    export function removeItem(key: string): void {
        let obj = getStoredItems();
        delete obj[key];
        length = countKeys(obj);
        writeFile(obj);
    }

    export function clear(): undefined {
        length = 0;
        writeFile({});
        return undefined;
    }

    export function getLength(): number {
        return countKeys(getStoredItems());
    }

    function countKeys(obj: any) {
        let size = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }

    export function key(n: number) {
        let obj = getStoredItems();
        let counter = 0;

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (n == counter) {
                    return key;
                } else if (counter > n) {
                    return null;
                }
                counter++;
            }
        }
        return null;
    };

    function getStoredItems() {
        try {
            return JSON.parse(readFile());
        } catch (e) {
            return {};
        }
    }

    function readFile() {
        return fs.readFileSync(getFilepath(), getFileOptions());
    }

    function writeFile(obj: any) {
        return fs.writeFileSync(getFilepath(), JSON.stringify(obj), getFileOptions());
    }

    function getFilepath() {
        return path.join(__dirname, config.filepath);
    }

    function getFileOptions() {
        return { "encoding": "utf8" };
    }
}

export = LocalStorage;
