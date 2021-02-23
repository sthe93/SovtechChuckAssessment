import { GET_RANDOM_JOKE } from "../actions/types";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://chuck-norris-api-k3nnet.herokuapp.com/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

//fetch a single random joke from api
export function fetchRandomJoke() {
  return function (dispatch) {
    client
      .query({
        query: gql`
          {
            random_joke {
              id
              value
              categories
              updated_at
              icon_url
            }
          }
        `,
        fetchPolicy: "network-only"
      })
      .then((result) => {
        console.log(result);
        dispatch({
          type: GET_RANDOM_JOKE,
          random_joke: result
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
