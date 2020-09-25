import { hello } from '../../src/resolvers/hello';

describe('.hello', () => {
  let subject;

  beforeAll(async () => {
    subject = await hello();
  });

  test('returns Hello World string', () => {
    expect(subject).toEqual('Hello World');
  });
});
