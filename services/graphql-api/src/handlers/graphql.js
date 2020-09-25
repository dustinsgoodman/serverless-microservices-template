import { ApolloServer, makeExecutableSchema } from 'apollo-server-lambda';
import { lexicographicSortSchema } from 'graphql';

import { isProduction } from 'Helpers/ContextHelper';

import { typeDefs } from '../typeDefs';
import { resolvers } from '../resolvers';
import { schemaDirectives } from '../schemaDirectives';

const isProd = isProduction();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  schema: lexicographicSortSchema(
    makeExecutableSchema({
      typeDefs,
      resolvers,
      schemaDirectives,
    })
  ),
  introspection: !isProd,
  playground: !isProd,
  tracing: !isProd,
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});
