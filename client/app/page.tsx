import "./Home.scss";
import { BannerSection } from "./components/BannerSection";
import { BottomBanerSection } from "./components/BottomBanerSection";
import { BrowseCategoriesSection } from "./components/BrowseCategoriesSection";
import { CollectionSection } from "./components/CollectionSection";
import { DiscoverNftSection } from "./components/DiscoverNftSection";
import { HowItWorkSection } from "./components/HowItWorkSection";
import { SubscribeSection } from "./components/SubscribeSection";
import { TopCreatorsSection } from "./components/TopCreatorsSection";
import { getClient } from "./libs/client";
import { IBanner } from "./types";

import { gql } from "@apollo/client";

export async function getBottomBanner(): Promise<IBanner[] | []> {
  const query = gql`
    query {
      bottomBanner {
        _id
        imgUrl
        assetName
        assetId
        createdBy {
          nickName
          avatarUrl
          _id
        }
      }
    }
  `;

  const bottomBanner = await getClient()
    .query<{ bottomBanner: IBanner[] }>({
      query,
    })
    .then((res) => res.data.bottomBanner)
    .catch((e) => {
      console.log("ERROR home-banner-route =>", e);
      return [];
    });

  return bottomBanner;
}

export default async function Home() {
  const bottomBanner = await getBottomBanner();

  return (
    <main className="main">
      <BannerSection />
      <CollectionSection />
      <TopCreatorsSection />
      <BrowseCategoriesSection />
      <DiscoverNftSection />
      {bottomBanner.length > 0 && (
        <BottomBanerSection
        imgUrl={bottomBanner[0].imgUrl}
        avatarUrl={bottomBanner[0].createdBy.avatarUrl}
        nickName={bottomBanner[0].createdBy.nickName}
        imgId={bottomBanner[0]._id}
        assetName={bottomBanner[0].assetName}
        creatorId={bottomBanner[0].createdBy._id}
        linkId={bottomBanner[0].assetId}
      />
      )}
      <HowItWorkSection />
      <SubscribeSection />
    </main>
  );
}
