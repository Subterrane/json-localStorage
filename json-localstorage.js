"use strict";
var fs = require("fs");
var path = require("path");
var config = require('./package.json').config;
var LocalStorage;
(function (LocalStorage) {
    LocalStorage.length = getLength();
    function getItem(key) {
        return getStoredItems()[key] || null;
    }
    LocalStorage.getItem = getItem;
    function setItem(key, value) {
        var obj = getStoredItems();
        obj[key] = value;
        LocalStorage.length = countKeys(obj);
        writeFile(obj);
    }
    LocalStorage.setItem = setItem;
    function removeItem(key) {
        var obj = getStoredItems();
        delete obj[key];
        LocalStorage.length = countKeys(obj);
        writeFile(obj);
    }
    LocalStorage.removeItem = removeItem;
    function clear() {
        LocalStorage.length = 0;
        writeFile({});
        return undefined;
    }
    LocalStorage.clear = clear;
    function getLength() {
        return countKeys(getStoredItems());
    }
    LocalStorage.getLength = getLength;
    function countKeys(obj) {
        var size = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    }
    function key(n) {
        var obj = getStoredItems();
        var counter = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (n == counter) {
                    return key;
                }
                else if (counter > n) {
                    return null;
                }
                counter++;
            }
        }
        return null;
    }
    LocalStorage.key = key;
    ;
    function getStoredItems() {
        try {
            return JSON.parse(readFile());
        }
        catch (e) {
            return {};
        }
    }
    function readFile() {
        return fs.readFileSync(getFilepath(), getFileOptions());
    }
    function writeFile(obj) {
        return fs.writeFileSync(getFilepath(), JSON.stringify(obj), getFileOptions());
    }
    function getFilepath() {
        return path.join(__dirname, config.filepath);
    }
    function getFileOptions() {
        return { "encoding": "utf8" };
    }
})(LocalStorage || (LocalStorage = {}));
module.exports = LocalStorage;
