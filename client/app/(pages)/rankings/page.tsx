import { getAllCreators } from "@/app/utils/getAllCreators";
import "./Rankings.scss";
import { ImageComponent } from "@/app/components/ImageComponent";
import { BASE_URL, PageLinks } from "@/app/utils/endpoint";
import Link from "next/link";
import { Breakpoints } from "@/app/types";

export default async function Rankings() {
  const creators = await getAllCreators();

  const filteredCreators = creators
    .filter((creator) => creator.totalSales > 2)
    .slice(0, 10);

  const sortFunc = (a: number, b: number) => {
    if (a - b > 0) {
      return -1;
    } else if (a - b < 0) {
      return 1;
    }
    return 0;
  };

  const sortedCreators = filteredCreators.sort((a, b) =>
    sortFunc(a.soldNft, b.soldNft)
  );

  return (
    <main className="container rankings">
      <section className="rankings__header">
        <h1 className="rankings__header-title">Top Creators</h1>
        <p className="rankings__header-sub-title">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </section>
      <section className="rankings__list">
        <div className="rankings__list-head">
          <span className="rankings__list-head-number"><span>#</span></span>
          <span className="rankings__list-head-main-info">Artist</span>
          <span className="rankings__list-head-nft-sold">NFTs Sold</span>
          <span className="rankings__list-head-total-sales">Volume</span>
        </div>
        {filteredCreators.map((creator, index) => {
          return (
            <Link
              href={`${PageLinks.CREATOR}/${creator._id}`}
              className="rankings__list-item"
              key={creator._id}
            >
              <div className="rankings__list-item-number">
                <span>{index + 1}</span>
              </div>
              <div className="rankings__list-item-main-info">
                <ImageComponent
                  imgClass="rankings__list-item-main-info-avatar"
                  src={`${BASE_URL}/${creator.avatarUrl}` || ""}
                  alt={creator.nickName}
                  width={60}
                  height={60}
                  tableWidth={32}
                  mobileWidth={24}
                />
                <span className="rankings__list-item-main-info-name">
                  {creator.nickName}
                </span>
              </div>
              <span className="rankings__list-item-nft-sold">
                {creator.soldNft}
              </span>
              <span className="rankings__list-item-total-sales">
                {creator.totalSales} ETH
              </span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
