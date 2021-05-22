import helloResolvers from './helloResolvers';

describe('Query.hello', () => {
  let subject;

  beforeAll(async () => {
    subject = await helloResolvers.Query.hello();
  });

  test('returns Hello World string', () => {
    expect(subject).toEqual('Hello World');
  });
});
