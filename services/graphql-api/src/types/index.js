import { mergeTypeDefs, mergeResolvers } from 'graphql-tools';

import { helloTypeDefs, helloResolvers } from './hello';

export const typeDefs = mergeTypeDefs([helloTypeDefs]);

export const resolvers = mergeResolvers([helloResolvers]);
