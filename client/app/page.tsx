import "./Home.scss";
import { BannerSection } from "./components/BannerSection";
import { BrowseCategoriesSection } from "./components/BrowseCategoriesSection";
import { TopCreatorsSection } from "./components/TopCreatorsSection";

export default function Home() {
  return (
    <main className="main">
      <BannerSection />
      <TopCreatorsSection />
      <BrowseCategoriesSection />
    </main>
  );
}
