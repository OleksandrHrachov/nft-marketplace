import "./Home.scss";
import { BannerSection } from "./components/BannerSection";
import { BrowseCategoriesSection } from "./components/BrowseCategoriesSection";
import { CollectionSection } from "./components/CollectionSection";
import { DiscoverNftSection } from "./components/DiscoverNftSection";
import { TopCreatorsSection } from "./components/TopCreatorsSection";

export default function Home() {
  return (
    <main className="main">
      <BannerSection />
      <CollectionSection />
      <TopCreatorsSection />
      <BrowseCategoriesSection />
      <DiscoverNftSection />
    </main>
  );
}
