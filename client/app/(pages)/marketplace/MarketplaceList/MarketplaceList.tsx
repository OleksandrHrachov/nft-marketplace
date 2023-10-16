import { getAllAssets } from "@/app/utils/getAllAssets";
import "./MarketplaceList.scss";
import { MarketplaceCard } from "../MarketplaceCard";
import { BASE_URL } from "@/app/utils/endpoint";

export default async function MarketplaceList() {
  const assets = await getAllAssets();

  return assets && assets.length > 0 ? (
    <div className="marketplace__list">
      {assets.map((asset) => {
        return (
          <MarketplaceCard
            key={asset._id}
            imageSrc={`${BASE_URL}/${asset.imgUrl}`}
            altText={asset.assetName}
            title={asset.assetName}
            href={`/nft/${asset._id}`}
            creatorAvatar={`${BASE_URL}/${asset.createdBy.avatarUrl}`}
            creatorNickName={asset.createdBy.nickName}
            price={asset.price}
            highestBid={asset.highestBid}
          />
        );
      })}
    </div>
  ) : (
    <div className="marketplace__list-empty-list">
      Sorry, the list of NFTs is not available.
    </div>
  );
}
