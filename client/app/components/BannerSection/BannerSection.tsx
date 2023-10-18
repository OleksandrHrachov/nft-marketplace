import "./BannerSection.scss";
import rocketIcon from "../../../public/rocketIcon.svg";
import { BASE_URL, PageLinks } from "../../utils/endpoint";
import { CustomLink } from "../CustomLink";
import { ImageComponent } from "../ImageComponent";
import Link from "next/link";
import { getBanner } from "./helper";

export default async function BannerSection() {
  const bannerData = await getBanner();

  return (
    <section className="container banner">
      <div className="banner__content">
        <h1 className="banner__title">Discover Digital Art & Collect NFTs</h1>
        <div className="banner__description">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </div>


        {bannerData ? (
        <Link
          href={`${PageLinks.NFT}/${bannerData.assetId}`}
          className="banner__image banner__image--internal"
        >
          <ImageComponent
            imgClass="banner__image-banner"
            src={`${BASE_URL}/${bannerData.imgUrl}` || ""}
            alt={bannerData.assetName}
            width={510}
            height={401}
            tableWidth={330}
            mobileWidth={315}
          />
          <div className="banner__image-info">
            <h5 className="banner__image-info-title">{bannerData.assetName}</h5>
            <div className="banner__image-info-creator">
              <ImageComponent
                imgClass="banner__image-info-creator-avatar"
                src={`${BASE_URL}/${bannerData.creatorAvatarUrl}` || ""}
                alt={bannerData.creatorNickName}
                width={20}
                height={20}
                tableWidth={20}
                mobileWidth={20}
              />

              <span className="banner__image-info-nick-name">
                {bannerData.creatorNickName}
              </span>
            </div>
          </div>
        </Link>
      ) : null}


        <div className="banner__button">
          <CustomLink
            href="/signup"
            iconSrc={rocketIcon}
            iconAlt="rocket"
            iconHeight={20}
            iconWidth={20}
          >
            Get Started
          </CustomLink>
        </div>
        <div className="banner__statistic">
          <div className="banner__statistic-item">
            <span className="banner__statistic-item-count">240k+</span>
            <span className="banner__statistic-item-description">
              Total Sale
            </span>
          </div>
          <div className="banner__statistic-item">
            <span className="banner__statistic-item-count">100k+</span>
            <span className="banner__statistic-item-description">Auctions</span>
          </div>
          <div className="banner__statistic-item">
            <span className="banner__statistic-item-count">240k+</span>
            <span className="banner__statistic-item-description">Artist</span>
          </div>
        </div>
      </div>
      {bannerData ? (
        <Link
          href={`${PageLinks.NFT}/${bannerData.assetId}`}
          className="banner__image banner__image--external"
        >
          <ImageComponent
            imgClass="banner__image-banner"
            src={`${BASE_URL}/${bannerData.imgUrl}` || ""}
            alt={bannerData.assetName}
            width={510}
            height={401}
            tableWidth={330}
            mobileWidth={315}
          />
          <div className="banner__image-info">
            <h5 className="banner__image-info-title">{bannerData.assetName}</h5>
            <div className="banner__image-info-creator">
              <ImageComponent
                imgClass="banner__image-info-creator-avatar"
                src={`${BASE_URL}/${bannerData.creatorAvatarUrl}` || ""}
                alt={bannerData.creatorNickName}
                width={20}
                height={20}
                tableWidth={20}
                mobileWidth={20}
              />

              <span className="banner__image-info-nick-name">
                {bannerData.creatorNickName}
              </span>
            </div>
          </div>
        </Link>
      ) : null}
    </section>
  );
}
