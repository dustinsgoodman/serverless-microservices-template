import { ApolloServer } from 'apollo-server-lambda';
import { createTestClient } from 'apollo-server-testing';
import { merge } from 'Utils/ObjectUtils';
import { typeDefs } from '../src/typeDefs';
import { resolvers } from '../src/resolvers';
import { schemaDirectives } from '../src/schemaDirectives';

const serverConfig = {
  schemaDirectives,
  dataSources: () => ({}),
};

const generateTestClient = (context, { extraTypeDefs = [], extraResolvers = [] } = {}) => {
  return createTestClient(
    new ApolloServer({
      ...serverConfig,
      typeDefs: [...typeDefs, ...extraTypeDefs],
      resolvers: merge(resolvers, ...extraResolvers),
    })
  );
};

export default generateTestClient;
