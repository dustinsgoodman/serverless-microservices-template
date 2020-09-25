import { gql } from 'apollo-server-lambda';

const baseTypeDefs = gql`
  """
  Collections of queries for schema
  """
  type Query {
    "Empty query type to serve as a parent for all other queries"
    _: String
    "Hello World example query for testing"
    hello: String
  }

  """
  Collections of mutations for schema
  """
  type Mutation {
    "Empty mutation type to serve as a parent for all other mutations"
    _: String
  }

  """
  Collections of subscriptions for schema
  """
  type Subscription {
    "Empty subscription type to serve as a parent for all other subscriptions"
    _: String
  }
`;

export const typeDefs = [baseTypeDefs];
