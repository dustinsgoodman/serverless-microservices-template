import { gql } from 'apollo-server-lambda';
import generateTestClient from '../../test/generateTestClient';

describe('hello Query', () => {
  let subject;

  beforeAll(async () => {
    const QUERY = gql`
      query HelloWorldQuery {
        hello
      }
    `;
    const { query } = generateTestClient({});
    subject = await query({
      query: QUERY,
    });
  });

  test('returns the HelloWorld string', () => {
    expect(subject.data).toEqual({
      hello: 'Hello World',
    });
  });
});
