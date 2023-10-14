import { IAsset } from "@/app/types";
import "./CollectionSection.scss";
import { CollectionCard } from "./CollectionCard";

import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";

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

export default async function CollectionSection() {
  const collections = await getCollections();

  return (
    <section className="container collection">
      <div className="collection__header">
        <div className="collection__header-text">
          <h3 className="collection__header-title">Trending Collection</h3>
          <div className="collection__header-description">
            Checkout our weekly updated trending collection.
          </div>
        </div>
      </div>
      {collections.length > 0 ? (
        <div className="collection__list">
          {collections.map((collection) => {
            return (
              <CollectionCard key={collection[0].assetName} data={collection} />
            );
          })}
        </div>
      ) : (
        <div className="collection__list-empty-list">
          Sorry, there was some error, so the list of collections is not available.
        </div>
      )}
      
    </section>
  );
}
