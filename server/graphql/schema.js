import { ApolloServer } from 'apollo-server-express';
// Imports: GraphQL TypeDefs & Resolvers
import TYPEDEFS from './types.js';
import RESOLVERS from './resolvers.js';

const server = new ApolloServer(
    {
        typeDefs: TYPEDEFS,
        resolvers: RESOLVERS,
        playground: {
          endpoint: `http://localhost:4000/graphql`,
          settings: {
            'editor.theme': 'light'
          }
        }
      }
);

export default server
