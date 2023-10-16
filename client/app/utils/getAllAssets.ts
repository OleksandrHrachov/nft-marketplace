import { cache } from "react";
import { getClient } from "../libs/client";
import { IAsset } from "../types";
import { gql } from "@apollo/client";

export const revalidate = 86400;

const ASSETS_QUERY = gql`
  query {
    assets {
      _id
      imgUrl
      assetName
      price
      highestBid
      createdBy {
        avatarUrl
        nickName
        _id
      }
    }
  }
`;

export const getAllAssets = cache(async (): Promise<IAsset[]> => {
  const assets = await getClient()
    .query<{ assets: IAsset[] }>({
      query: ASSETS_QUERY,
    })
    .then((res) => res.data.assets)
    .catch((e) => {
      console.log("ERROR nft page =>", e);
      throw Error(`ERROR nft page => ${e}`);
    });

  return assets;
});
