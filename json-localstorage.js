var fs = require('fs');
var path = require('path');
var config = require('./package.json').config;

module.exports = LocalStorage;

/**
 * LocalStorage constructor
 *
 * @param filepath - (optional) File path. Defaults to '.storage.json'.
 * @constructor
 */
function LocalStorage(filepath) {
    this.filepath = filepath || path.join(__dirname, config.filepath);
    this.options = {"encoding": "utf8"};

    var self = this;

    /**
     * Length Property
     *
     * @returns {number} - the number if items in storage
     */
    Object.defineProperty(this, "length", {
        get: function () {
            var data, obj, size = 0;
            data = fs.readFileSync(self.filepath, self.options);
            obj = JSON.parse(data);
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        }
    })
}

/**
 * Get an item from storage
 *
 * @param key - the item to retrieve from storage
 * @returns {*}
 */
LocalStorage.prototype.getItem = function (key) {
    var data = fs.readFileSync(this.filepath, this.options);
    var obj = JSON.parse(data);
    return obj[key] || null;
};

/**
 * Set an item in storage
 *
 * @param key - the item name
 * @param value - the item value
 */
LocalStorage.prototype.setItem = function (key, value) {
    var data, obj;
    try {
        data = fs.readFileSync(this.filepath, this.options);
        obj = JSON.parse(data);
    } catch (e) {
        obj = {};
    }
    obj[key] = value;
    fs.writeFileSync(this.filepath, JSON.stringify(obj), this.options);
};

/**
 * Remove an item from storage
 *
 * @param key - the item to remove from storage
 */
LocalStorage.prototype.removeItem = function (key) {
    var data, obj;
    data = fs.readFileSync(this.filepath, this.options);
    obj = JSON.parse(data);
    delete obj[key];
    fs.writeFileSync(this.filepath, JSON.stringify(obj), this.options);
};

/**
 * Clear all items from storage
 */
LocalStorage.prototype.clear = function () {
    fs.writeFileSync(this.filepath, JSON.stringify({}), this.options);
};

/**
 * Return the name of the nth key in the list
 *
 * @param n - item number
 * @returns {*}
 */
LocalStorage.prototype.key = function (n) {
    var data, obj, counter = 0;

    if (n > this.length) {
        return null;
    }

    data = fs.readFileSync(this.filepath, this.options);
    obj = JSON.parse(data);

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (n == counter) {
                return key;
            }
            counter++;
        }
    }
};
