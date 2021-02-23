import { gql } from 'apollo-server-express';
// GraphQL: TypeDefs
const TYPEDEFS = gql`
type Query {
    random_joke: Joke
    categories:[String]
    jokes(category:String!):Joke
  }
type Joke {
    categories:[String]
    created_at: String!
    id:ID!
    updated_at:String!
    url:String
    icon_url:String     
    value: String!
  }


`;
// Exports
export default TYPEDEFS;