# json-localstorage

A clone of the Web Storage API for node using a JSON file for data

## Installation

npm install json-localstorage

## Usage

    var LocalStorage = require('json-localstorage');
    var localStorage = new LocalStorage();
    
    localStorage.setItem("testKey", "testValue");
    var test = localStorage.getItem("testKey");
    var length = localStorage.length;
    var key = localStorage.key(0);
    localStorage.clear();
    localStorage.removeItem("testKey");

## Documentation

### `function LocalStorage(filepath)`

LocalStorage constructor

 * **Parameters:** `filepath` — (optional) File path. Defaults to '.storage.json'.
 * **Constructor**

### `Object.defineProperty(this, "length",`

Length Property

 * **Returns:** `number` — the number if items in storage

### `LocalStorage.prototype.getItem = function (key)`

Get an item from storage

 * **Parameters:** `key` — the item to retrieve from storage
 * **Returns:** `*` — 

### `LocalStorage.prototype.setItem = function (key, value)`

Set an item in storage

 * **Parameters:**
   * `key` — the item name
   * `value` — the item value

### `LocalStorage.prototype.removeItem = function (key)`

Remove an item from storage

 * **Parameters:** `key` — the item to remove from storage

### `LocalStorage.prototype.clear = function ()`

Clear all items from storage

### `LocalStorage.prototype.key = function (n)`

Return the name of the nth key in the list

 * **Parameters:** `n` — item number
 * **Returns:** `*` — 

## MIT License

The MIT License (MIT)

Copyright (c) 2015 Will Munslow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
