import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";
import { IAsset } from "@/app/types";

export async function getCollections():Promise<Array<IAsset[]>> {
  const query = gql`
    query {
      assetsCollection(tags: ["animal", "robot", "mushroom"]) {
        assetName
        imgUrl
        _id
        tags
        createdBy {
          avatarUrl
          nickName
          _id
        }
      }
    }
  `;

  const collections = await getClient()
    .query<{ assetsCollection: IAsset[] }>({
      query,
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log("ERROR home-collection-route =>", e);
      return { assetsCollection: [] };
    });

  const collection1: IAsset[] = [];
  const collection2: IAsset[] = [];
  const collection3: IAsset[] = [];

  collections.assetsCollection.forEach((asset) => {
    if (asset.tags[0] === "animal") {
      collection1.push(asset);
    }
    if (asset.tags[0] === "robot") {
      collection2.push(asset);
    }
    if (asset.tags[0] === "mushroom") {
      collection3.push(asset);
    }
  });

  return [collection1, collection2, collection3];
}