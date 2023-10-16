import { cache } from "react";
import { getClient } from "../libs/client";
import { ICreator } from "../types";
import { gql } from "@apollo/client";

export const revalidate = 86400;

const CREATORS_QUERY = gql`
    query {
      artists {
        _id
        nickName
        avatarUrl
        soldNft
        totalSales
      }
    }
  `;

export const getAllCreators = cache(async (): Promise<ICreator[]> => {
  
  const creators = await getClient()
    .query<{ artists: ICreator[] }>({
      query: CREATORS_QUERY
    })
    .then((res) => res.data.artists)
    .catch((e) => {
      console.log('ERROR creator page =>', e)
      throw Error(`ERROR creator page => ${e}`)
      
    });

  return creators;
});
