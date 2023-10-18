import { gql } from "@apollo/client";
import { IBanner } from "./types";
import { getClient } from "./libs/client";

export async function getBottomBanner(): Promise<IBanner[] | []> {
  const query = gql`
    query {
      bottomBanner {
        _id
        imgUrl
        assetName
        assetId
        createdBy {
          nickName
          avatarUrl
          _id
        }
      }
    }
  `;

  const bottomBanner = await getClient()
    .query<{ bottomBanner: IBanner[] }>({
      query,
    })
    .then((res) => res.data.bottomBanner)
    .catch((e) => {
      console.log("ERROR home-banner-route =>", e);
      return [];
    });

  return bottomBanner;
}