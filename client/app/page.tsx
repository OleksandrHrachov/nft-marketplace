import "./Home.scss";
import { BannerSection } from "./components/BannerSection";
import { BottomBanerSection } from "./components/BottomBanerSection";
import { BrowseCategoriesSection } from "./components/BrowseCategoriesSection";
import { CollectionSection } from "./components/CollectionSection";
import { DiscoverNftSection } from "./components/DiscoverNftSection";
import { HowItWorkSection } from "./components/HowItWorkSection";
import { TopCreatorsSection } from "./components/TopCreatorsSection";

export default function Home() {
  return (
    <main className="main">
      <BannerSection />
      <CollectionSection />
      <TopCreatorsSection />
      <BrowseCategoriesSection />
      <DiscoverNftSection />
      <BottomBanerSection />
      <HowItWorkSection />
    </main>
  );
}
