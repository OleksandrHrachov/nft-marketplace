import Image from "next/image";
import { getCreator } from "../../../utils/getCreator";
import "./Creator.scss";
import { ImageComponent } from "@/app/components/ImageComponent";
import { BASE_URL } from "@/app/utils/endpoint";
import { Breakpoints } from "@/app/types";
import Link from "next/link";
import youtubeIcon from "../../../../public/youtubeLogo.svg";
import twitterIcon from "../../../../public/twitterLogo.svg";
import instagramIcon from "../../../../public/instagramLogo.svg";
import { CreatorDiscoveryCard } from "./CreatorDiscoveryCard";
import { ButtonsGroup } from "./ButtonsGroup";

interface IProps {
  params: {
    id: string;
  };
}

interface ILinkObj {
  [key: string]: string;
}

interface ILink {
  linkName: string;
  link: string;
}

const socialLinks: { [key: string]: any } = {
  youtube: youtubeIcon as any,
  twitter: twitterIcon as any,
  instagram: instagramIcon as any,
};

export default async function CreatorPage({ params: { id } }: IProps) {
  const creatorData = await getCreator(id);

  if (Object.keys(creatorData).length === 0) return null;

  const socialLinkArr: ILink[] = [];
  const linkObj: ILinkObj = creatorData.socialLinks;

  for (let link in linkObj) {
    if (link === "__typename") continue;
    socialLinkArr.push({ linkName: link, link: linkObj[link] });
  }

  return (
    <main className="creator">
      <section
        className={`container creator__section ${
          creatorData.getAssets.length === 0 ? "creator__section-empty" : ""
        }`}
      >
        <div className="creator__top-image">
          {creatorData.getAssets.length > 0 && (
            <ImageComponent
              imgClass="creator__top-image-image"
              src={`${BASE_URL}/${creatorData.getAssets[0].imgUrl}`}
              alt={creatorData.getAssets[0].assetName}
              width={Breakpoints.DESKTOP}
              height={400}
              tableWidth={Breakpoints.TABLET}
              mobileWidth={Breakpoints.MOBILE}
            />
          )}
        </div>
        <div className="creator__avatar">
          <ImageComponent
            imgClass="creator__avatar-image"
            src={`${BASE_URL}/${creatorData.avatarUrl}`}
            alt={creatorData.nickName}
            width={120}
            height={120}
            tableWidth={120}
            mobileWidth={120}
          />
        </div>
        <div className="creator__info">
          <h2 className="creator__name">{creatorData.nickName}</h2>
          <div className="creator__buttons">
            <ButtonsGroup creatortId={creatorData._id} />
          </div>

          <div className="creator__statistic">
            <div className="creator__statistic-item">
              <p className="creator__statistic-item-count">
                {creatorData.volume}
              </p>
              <p className="creator__statistic-item-title">Volume</p>
            </div>
            <div className="creator__statistic-item">
              <p className="creator__statistic-item-count">
                {creatorData.soldNft}
              </p>
              <p className="creator__statistic-item-title">NFTs sold</p>
            </div>
            <div className="creator__statistic-item">
              <p className="creator__statistic-item-count">
                {creatorData.followers}
              </p>
              <p className="creator__statistic-item-title">Followers</p>
            </div>
          </div>

          <div className="creator__bio">
            <h4 className="creator__bio-title">bio</h4>
            <p className="creator__bio-description">{creatorData.bio}</p>
          </div>
          <div className="creator__links">
            <h4 className="creator__links-title">links</h4>
            <div className="creator__links-items">
              {socialLinkArr.length > 0 &&
                socialLinkArr.map((link) => {
                  return (
                    <Link
                      className="creator__links-icon"
                      key={link.linkName}
                      href={link.link || ""}
                      target="_blank"
                    >
                      <Image
                        className="creator__links-icon-image"
                        src={socialLinks[link.linkName]}
                        alt={link.linkName}
                        width={32}
                        height={32}
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <section className="creator__list-section">
        <div className="container creator__list-nft-inner">
          {creatorData.getAssets.length > 0 ? (
            <div className="creator__list-nft">
              {creatorData.getAssets.map((card) => {
                return (
                  <CreatorDiscoveryCard
                    key={card._id}
                    imageSrc={`${BASE_URL}/${card.imgUrl}`}
                    altText={card.assetName}
                    title={card.assetName}
                    href={`/nft/${card._id}`}
                    creatorAvatar={`${BASE_URL}/${creatorData.avatarUrl}`}
                    creatorNickName={creatorData.nickName}
                    price={card.price}
                    highestBid={card.highestBid}
                  />
                );
              })}
            </div>
          ) : (
            <div className="creator__list-empty-list">
              {`At the moment, ${creatorData.nickName} has not put up any NFTs for sale.`}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
