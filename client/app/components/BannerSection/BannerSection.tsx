import "./BannerSection.scss";
import rocketIcon from "../../../public/rocketIcon.svg";
import { IBanner, IArtist } from "../../types";
import { BASE_URL } from '../../utils/endpoint';
import { CustomLink } from "../CustomLink";
import { ImageComponent } from "../ImageComponent";

interface IBannerData {
  bannerImage: IBanner;
  artist: IArtist;
}

const getBanner = async (): Promise<IBannerData> => {
  const banner = await fetch("http://localhost:3000/api/home/", {
    method: "GET",
  }).then((res) => res.json());

  return banner;
};

export default async function BannerSection() {
  const bannerData = await getBanner();
  console.log("bannerData =>", bannerData);

  return (
    <section className="container banner">
      <div className="banner__content">
        <h1 className="banner__title">Discover Digital Art & Collect NFTs</h1>
        <div className="banner__description">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </div>
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
      <div className="banner__image">
        <ImageComponent
          imgClass="banner__image-banner"
          src={`${BASE_URL}/${bannerData.bannerImage.imgUrl}` || ""}
          alt={bannerData.bannerImage.assetName}
          width={510}
          height={401}
          tableWidth={330}
          mobileWidth={315}
        />
        <div className="banner__image-info">
          <h5 className="banner__image-info-title">
            {bannerData.bannerImage.assetName}
          </h5>
          <div className="banner__image-info-creator">
            <ImageComponent
              imgClass="banner__image-info-creator-avatar"
              src={`${BASE_URL}/${bannerData.artist.avatarUrl}` || ""}
              alt={bannerData.bannerImage.assetName}
              width={20}
              height={20}
              tableWidth={20}
              mobileWidth={20}
            />

            <span className="banner__image-info-nick-name">
              {bannerData.artist.nickName}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
