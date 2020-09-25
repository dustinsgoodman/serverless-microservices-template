import { merge } from 'Utils/ObjectUtils';
import { hello } from './hello';

export const resolvers = merge({
  Query: {
    hello,
  },
});
