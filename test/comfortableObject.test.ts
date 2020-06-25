import ComfortableObject from '../src/comfortableObject';

describe('ComfortableObject', () => {
  describe('Default option', () => {
    beforeEach(() => {
      const cObj = new ComfortableObject();
      cObj.apply();
    });

    describe('has methods', () => {
      test('clone', () => {
        expect({}).toHaveProperty('clone');
      });

      test('entries', () => {
        expect({}).toHaveProperty('entries');
      });

      test('keys', () => {
        expect({}).toHaveProperty('keys');
      });

      test('length', () => {
        expect({}).toHaveProperty('length');
      });

      test('size', () => {
        expect({}).toHaveProperty('size');
      });

      test('values', () => {
        expect({}).toHaveProperty('values');
      });
    });

    describe('result', () => {
      test('clone', () => {
        const obj: any = {a: 1, b: 2, c: 3};
        expect(obj.clone).toEqual(obj);
      });

      test('entries', () => {
        const obj: any = {a: 1, b: 2, c: 3};
        expect(obj.entries).toEqual(Object.entries(obj));
      });

      test('keys', () => {
        const obj: any = {a: 1, b: 2, c: 3};
        expect(obj.keys).toEqual(Object.keys(obj));
      });

      test('length', () => {
        const obj: any = {a: 1, b: 2, c: 3};
        expect(obj.length).toEqual(Object.keys(obj).length);
      });

      test('size', () => {
        const obj: any = {a: 1, b: 2, c: 3};
        expect(obj.size).toEqual(30);
      });

      test('values', () => {
        const obj: any = {a: 1, b: 2, c: 3};
        expect(obj.values).toEqual(Object.values(obj));
      });
    });
  });
});
