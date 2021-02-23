import {
  GET_CATEGORIES,
  ACTIVE_CATEGORY,
  GET_CATEGORY_JOKE
} from "../actions/types";

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

//fetch categories from api
export function fetchCategories() {
  return function (dispatch) {
    client
      .query({
        query: gql`
          {
            categories
          }
        `
      })
      .then((result) => {
        console.log(result);
        dispatch({
          type: GET_CATEGORIES,
          categories: result
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// fetch a single joke under given category
export function fetchJoke(categoryIn) {
  const category = categoryIn.toLowerCase();
  return function (dispatch) {
    console.log(category);

    const query = gql`
      query jokes($category: String!) {
        jokes(category: $category) {
          id
          value
          categories
          updated_at
          icon_url
        }
      }
    `;
    client
      .query({
        query: query,
        variables: {
          category: category
        },
        fetchPolicy: "network-only"
      })
      .then((result) => {
        console.log(result);
        dispatch({
          type: GET_CATEGORY_JOKE,
          joke: result
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//change active category
export function selectCategory(category) {
  return function (dispatch) {
    dispatch({
      type: ACTIVE_CATEGORY,
      category: category
    });
  };
}
