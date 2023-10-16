import { cache } from "react";
import { getClient } from "../libs/client";
import { IAsset } from "../types";
import { gql } from "@apollo/client";

export const revalidate = 86400;

const ASSET_QUERY = gql`
  query Asset($id: ID) {
    asset (_id: $id) {
      _id
      imgUrl
      assetName
      description
      createdAt
      createdBy {
        avatarUrl
        nickName
        _id
      }
    }
  }
`;

export const getOneAsset = cache(async (id: string): Promise<IAsset> => {
  const assets = await getClient()
    .query<{ asset: IAsset }>({
      query: ASSET_QUERY,
      variables: {id}
    })
    .then((res) => res.data.asset)
    .catch((e) => {
      console.log("ERROR nft page =>", e);
      throw Error(`ERROR nft page => ${e}`);
    });

  return assets;
});
