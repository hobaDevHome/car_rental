"use client ";

import { request, gql } from "graphql-request";

const queryURL =
  "https://api-ap-southeast-2.hygraph.com/v2/clp77ggjm1ga001ug6kiwgs8w/master";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        seats
        updatedAt
        image {
          url
        }
        carBrand
        carType
      }
    }
  `;

  const result = await request(queryURL, query);
  return result;
};
