import { ApolloServer } from 'apollo-server-lambda';
import { createTestClient } from 'apollo-server-testing';
import { mergeTypeDefs, mergeResolvers } from 'graphql-tools';
import { typeDefs, resolvers } from '../types';
import { schemaDirectives } from '../schemaDirectives';

const serverConfig = {
  schemaDirectives,
  dataSources: () => ({}),
};

const generateTestClient = (context, { extraTypeDefs = [], extraResolvers = [] } = {}) => {
  return createTestClient(
    new ApolloServer({
      ...serverConfig,
      typeDefs: mergeTypeDefs([typeDefs, extraTypeDefs]),
      resolvers: mergeResolvers([resolvers, extraResolvers]),
    })
  );
};

export default generateTestClient;
