import { getOneAsset } from "@/app/utils/getOneAsset";
import "./NftPage.scss";
import { ImageComponent } from "@/app/components/ImageComponent";
import { BASE_URL, PageLinks } from "@/app/utils/endpoint";
import { Breakpoints } from "@/app/types";
import { CopyButton } from "./CopyButton";
import Link from "next/link";

interface IProps {
  params: {
    id: string;
  };
}

export default async function NftPage({ params: { id } }: IProps) {
  const asset = await getOneAsset(id);

  return (
    <main className="nft">
      {asset ? (
        <div className="nft__asset">
          <section className="nft__asset-image">
            <ImageComponent
              imgClass="nft__asset-image-image"
              src={`${BASE_URL}/${asset.imgUrl}`}
              alt={asset.assetName}
              width={560}
              height={500}
              tableWidth={Breakpoints.TABLET}
              mobileWidth={Breakpoints.MOBILE}
            />
          </section>
          <section className="container nft__asset-info">
            <h1 className="nft__asset-info-title">{asset.assetName}</h1>
            <p className="nft__asset-info-created-at">
              Minted on {asset.createdAt}
            </p>

            <div className="nft__asset-info-button">
              <CopyButton assetId={asset._id} />
            </div>

            <div className="nft__asset-info-creator">
              <p className="nft__asset-info-creator-title"> Created by</p>
              <Link
                href={`${PageLinks.CREATOR}/${asset.createdBy._id}`}
                className="nft__asset-info-creator-inner"
              >
                <ImageComponent
                  imgClass="nft__asset-info-creator-avatar"
                  src={`${BASE_URL}/${asset.createdBy.avatarUrl}` || ""}
                  alt={asset.createdBy.nickName}
                  width={60}
                  height={60}
                  tableWidth={24}
                  mobileWidth={24}
                />
                <span className="nft__asset-info-creator-name">
                  {asset.createdBy.nickName}
                </span>
              </Link>
            </div>

            <div className="nft__asset-info-description">
              <p className="nft__asset-info-description-title">Description</p>
              <p className="nft__asset-info-description-desc">
                {asset.description}
              </p>
            </div>
          </section>
        </div>
      ) : (
        <div className="container nft__empty">
          Sorry, for some reason we cannot display information about NFT.
        </div>
      )}
    </main>
  );
}
