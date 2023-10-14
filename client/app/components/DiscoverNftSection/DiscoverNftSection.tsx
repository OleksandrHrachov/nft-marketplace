import { CustomLink } from "../CustomLink";
import "./DiscoverNftSection.scss";
import eyeIcon from "../../../public/eyeIcon.svg";
import { DiscoveryCard } from "./DiscoveryCard";
import { BASE_URL } from "@/app/utils/endpoint";
import { IAsset } from "@/app/types";

import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";

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

export default async function DiscoverNftSection() {
  const cards = (await getAssets()).slice(0, 3);

  return (
    <section className="container discover">
      <div className="discover__header">
        <div className="discover__header-text">
          <h3 className="discover__header-title">Discover More NFTs</h3>
          <div className="discover__header-description">
            Explore new trending NFTs
          </div>
        </div>
        <div className="discover__header-button">
          <CustomLink
            iconClassName="discover__header-button-icon"
            href="/marketplace"
            variant="outline"
            iconSrc={eyeIcon}
            iconAlt="rocket"
            iconHeight={20}
            iconWidth={20}
          >
            See All
          </CustomLink>
        </div>
      </div>

      {cards.length > 0 ? (
        <div className="discover__list">
          {cards.map((card) => {
            return (
              <DiscoveryCard
                key={card._id}
                imageSrc={`${BASE_URL}/${card.imgUrl}`}
                altText={card.assetName}
                title={card.assetName}
                href={`/nft/${card._id}`}
                creatorAvatar={`${BASE_URL}/${card.createdBy.avatarUrl}`}
                creatorNickName={card.createdBy.nickName}
                price={card.price}
                highestBid={card.highestBid}
              />
            );
          })}
        </div>
      ) : (
        <div className="discover__list-empty-list">
          Sorry, there was some error, so the list of NFTs is not available.
        </div>
      )}
    </section>
  );
}
