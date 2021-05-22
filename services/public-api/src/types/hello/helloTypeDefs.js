import { gql } from 'apollo-server-lambda';

export default gql`
  """
  Collections of queries for schema
  """
  type Query {
    "Hello World example query for testing"
    hello: String
  }
`;
