import { CustomLink } from "../CustomLink";
import rocketIcon from "../../../public/rocketIcon.svg";
import "./TopCreatorsSection.scss";
import { CreatorCard } from "./CreatorCard";
import { ICreator } from "@/app/types";
import { BASE_URL } from "@/app/utils/endpoint";

import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";

export async function getCreators(): Promise<ICreator[]> {
  const query = gql`
    query {
      artists {
        _id
        nickName
        avatarUrl
        totalSales
      }
    }
  `;

  const creators = await getClient()
    .query<{ artists: ICreator[] }>({
      query,
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log("ERROR home-creators-route =>", e);
      return { artists: [] };
    });
  return creators.artists;
}

export default async function TopCreatorsSection() {
  const creators = (await getCreators()).slice(0, 12);

  return (
    <section className="container creators">
      <div className="creators__header">
        <div className="creators__header-text">
          <h3 className="creators__header-title">Top creators</h3>
          <div className="creators__header-description">
            Checkout Top Rated Creators on the NFT Marketplace
          </div>
        </div>
        <div className="creators__header-button">
          <CustomLink
            iconClassName="creators__header-button-icon"
            href="/rankings"
            variant="outline"
            iconSrc={rocketIcon}
            iconAlt="rocket"
            iconHeight={20}
            iconWidth={20}
          >
            View Rankings
          </CustomLink>
        </div>
      </div>
      {creators.length > 0 ? (
        <div className="creators__list">
          {creators.map((creator, index) => {
            return (
              <CreatorCard
                href={`/creator/${creator._id}`}
                key={creator.nickName}
                totalSales={creator.totalSales || 0}
                nickName={creator.nickName}
                itemNumber={index + 1}
                avatarSrc={`${BASE_URL}/${creator.avatarUrl}`}
              />
            );
          })}
        </div>
      ) : (
        <div className="creators__list-empty-list">
          Sorry, there was some error, so the list of TOP creators is not
          available.
        </div>
      )}
    </section>
  );
}
