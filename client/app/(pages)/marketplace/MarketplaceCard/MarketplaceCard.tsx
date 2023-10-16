import { ImageComponent } from '@/app/components/ImageComponent';
import './MarketplaceCard.scss';
import Link from "next/link";

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

export default function MarketplaceCard({
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
    <Link href={href} className="marketplace-card">
      <ImageComponent
        imgClass="marketplace-card__image"
        src={imageSrc}
        alt={altText}
        width={240}
        height={240}
        tableWidth={150}
        mobileWidth={148}
      />
      <div className="marketplace-card__footer">
        <h5 className="marketplace-card__footer-title">{title}</h5>
        <div className="marketplace-card__footer-creator">
          <ImageComponent
            imgClass="marketplace-card__footer-creator-avatar"
            src={creatorAvatar || ""}
            alt={creatorNickName}
            width={24}
            height={24}
            tableWidth={24}
            mobileWidth={24}
          />
          <span className="marketplace-card__footer-creator-name">
            {creatorNickName}
          </span>
        </div>
        <div className="marketplace-card__footer-price">
          <div className="marketplace-card__footer-price-item">
            <span className="marketplace-card__footer-price-item-title">
              Price
            </span>
            <span className="marketplace-card__footer-price-item-price">
              {price}
            </span>
          </div>
          <div className="marketplace-card__footer-price-item">
            <span className="marketplace-card__footer-price-item-title right">
              Highest Bid
            </span>
            <span className="marketplace-card__footer-price-item-price">
              {highestBid} wETH
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

