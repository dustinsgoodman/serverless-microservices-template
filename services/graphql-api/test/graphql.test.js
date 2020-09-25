import { graphqlHandler } from '../src/handlers/graphql';

describe('apollo server', () => {
  test('returns graphql server handler', () => {
    expect(graphqlHandler).toBeInstanceOf(Function);
  });
});
