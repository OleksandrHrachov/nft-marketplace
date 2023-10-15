import { cache } from "react";
import { getClient } from "../libs/client";
import { ICreator } from "../types";
import { gql } from "@apollo/client";

export const revalidate = 86400;

const CREATOR_QUERY = gql`
    query Creator($id: ID) {
      artist(_id: $id) {
        _id
        nickName
        avatarUrl
        volume
        soldNft
        followers
        bio
        socialLinks {
          youtube
          twitter
          instagram
        }
        getAssets {
          _id
          assetName
          imgUrl
          createdAt
          description
          price
          highestBid
          creatorId
        }
        totalSales
      }
    },
  `;

export const getCreator = cache(async (id: string): Promise<ICreator> => {
  
  const creator = await getClient()
    .query<{ artist: ICreator }>({
      query: CREATOR_QUERY,
      variables: {
        id
      }
    })
    .then((res) => res.data.artist)
    .catch((e) => {
      console.log('ERROR creator page =>', e)
      throw Error(`ERROR creator page => ${e}`)
      
    });

  return creator;
});
