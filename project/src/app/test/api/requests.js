import { request } from "graphql-request";
import { ALL_RUBRIC } from "./graphql";

const getTest = (param) => {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_API;
  const variables = {
    key: process.env.KEY,
  };
  return request(url, ALL_RUBRIC, variables);
};

export const useRequest = {
  getTest,
};
