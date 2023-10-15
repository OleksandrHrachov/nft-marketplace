import Link from "next/link";
import "./CreatorDiscoveryCard.scss";
import { ImageComponent } from "../../../../components/ImageComponent";

interface IProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  creatorAvatar: string;
  creatorNickName: string;
  price: number;
  highestBid: number;
}

export default function CreatorDiscoveryCard({
  href,
  imageSrc,
  altText,
  title,
  creatorAvatar,
  creatorNickName,
  price,
  highestBid,
}: IProps) {
  return (
    <Link href={href} className="creator-descovery-card">
      <ImageComponent
        imgClass="creator-descovery-card__image"
        src={imageSrc}
        alt={altText}
        width={240}
        height={240}
        tableWidth={150}
        mobileWidth={148}
      />
      <div className="creator-descovery-card__footer">
        <h5 className="creator-descovery-card__footer-title">{title}</h5>
        <div className="creator-descovery-card__footer-creator">
          <ImageComponent
            imgClass="creator-descovery-card__footer-creator-avatar"
            src={creatorAvatar || ""}
            alt={creatorNickName}
            width={24}
            height={24}
            tableWidth={24}
            mobileWidth={24}
          />
          <span className="creator-descovery-card__footer-creator-name">
            {creatorNickName}
          </span>
        </div>
        <div className="creator-descovery-card__footer-price">
          <div className="creator-descovery-card__footer-price-item">
            <span className="creator-descovery-card__footer-price-item-title">
              Price
            </span>
            <span className="creator-descovery-card__footer-price-item-price">
              {price}
            </span>
          </div>
          <div className="creator-descovery-card__footer-price-item">
            <span className="creator-descovery-card__footer-price-item-title right">
              Highest Bid
            </span>
            <span className="creator-descovery-card__footer-price-item-price">
              {highestBid} wETH
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
