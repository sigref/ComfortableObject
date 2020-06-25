'use strict';

import sizeof from 'object-sizeof';

export = class ComfortableObject implements IComfortableObjectClass {
  private useClone: boolean;
  private useEntries: boolean;
  private useKeys: boolean;
  private useLength: boolean;
  private useSize: boolean;
  private useValues: boolean;

  constructor(obj: IConstractorArg = {}) {
    const getValue: (arg?: boolean) => boolean = (arg) => arg != undefined
      ? Boolean(arg)
      : true;

    this.useClone = getValue(obj.clone);
    this.useEntries = getValue(obj.entries);
    this.useKeys = getValue(obj.keys);
    this.useLength = getValue(obj.length);
    this.useSize = getValue(obj.size);
    this.useValues = getValue(obj.values);
  }

  public apply: (obj?: any) => void = (obj) => {
    const target: IComfortableObject = obj == undefined || obj === Object
      ? Object.prototype
      : obj;

    if (typeof target !== 'object') return;

    if (this.useClone && !target.clone) {
      Object.defineProperty(target, 'clone', {
        get() {return JSON.parse(JSON.stringify(this));},
      });
    }

    if (this.useEntries && !target.entries) {
      Object.defineProperty(target, 'entries', {
        get() {return Object.entries(this);},
      });
    }

    if (this.useKeys && !target.keys) {
      Object.defineProperty(target, 'keys', {
        get(): string[] {return Object.keys(this);},
      });
    }

    if (this.useLength && !target.length) {
      Object.defineProperty(target, 'length', {
        get(): number {return Object.keys(this).length;},
      });
    }

    if (this.useSize && !target.size) {
      Object.defineProperty(target, 'size', {
        get(): number {return sizeof(this);},
      });
    }

    if (this.useValues && !target.values) {
      Object.defineProperty(target, 'values', {
        get() {return Object.values(this);},
      });
    }
  };
};
