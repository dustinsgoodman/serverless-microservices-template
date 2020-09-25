import { merge } from 'Utils/ObjectUtils';

describe('.merge', () => {
  let subject;
  beforeAll(() => {
    const a = {
      a: [{ b: 2 }, { d: 4 }],
    };
    const b = {
      a: [{ c: 3 }, { e: 5 }],
    };
    const c = {
      a: [{ b: 7 }, { f: 6 }],
      g: 'g',
    };
    subject = merge(a, b, c);
  });

  test('returns merged object', () => {
    expect(subject).toEqual({
      a: [
        { b: 7, c: 3 },
        { d: 4, e: 5, f: 6 },
      ],
      g: 'g',
    });
  });
});
