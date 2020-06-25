'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var object_sizeof_1 = __importDefault(require("object-sizeof"));
module.exports = /** @class */ (function () {
    function ComfortableObject(obj) {
        var _this = this;
        if (obj === void 0) { obj = {}; }
        this.apply = function (obj) {
            var target = obj == undefined || obj === Object
                ? Object.prototype
                : obj;
            if (typeof target !== 'object')
                return;
            if (_this.useClone && !target.clone) {
                Object.defineProperty(target, 'clone', {
                    get: function () { return JSON.parse(JSON.stringify(this)); },
                });
            }
            if (_this.useEntries && !target.entries) {
                Object.defineProperty(target, 'entries', {
                    get: function () { return Object.entries(this); },
                });
            }
            if (_this.useKeys && !target.keys) {
                Object.defineProperty(target, 'keys', {
                    get: function () { return Object.keys(this); },
                });
            }
            if (_this.useLength && !target.length) {
                Object.defineProperty(target, 'length', {
                    get: function () { return Object.keys(this).length; },
                });
            }
            if (_this.useSize && !target.size) {
                Object.defineProperty(target, 'size', {
                    get: function () { return object_sizeof_1.default(this); },
                });
            }
            if (_this.useValues && !target.values) {
                Object.defineProperty(target, 'values', {
                    get: function () { return Object.values(this); },
                });
            }
        };
        var getValue = function (arg) { return arg != undefined
            ? Boolean(arg)
            : true; };
        this.useClone = getValue(obj.clone);
        this.useEntries = getValue(obj.entries);
        this.useKeys = getValue(obj.keys);
        this.useLength = getValue(obj.length);
        this.useSize = getValue(obj.size);
        this.useValues = getValue(obj.values);
    }
    return ComfortableObject;
}());
