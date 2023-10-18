import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";
import { IAsset } from "@/app/types";

export async function getAssets(): Promise<IAsset[]> {
  const query = gql`
    query {
      assets{
    _id
    imgUrl
    assetName
    price
    highestBid
    createdBy{
      nickName
      avatarUrl
      _id
    }
  }
    }
  `;

  const assets = await getClient()
    .query<{ assets: IAsset[] }>({
      query,
    })
    .then((res) => res.data)
    .catch(e => {
      console.log('ERROR home-discovery-route =>', e);
      return {assets: []}
    })

    return assets.assets;
};