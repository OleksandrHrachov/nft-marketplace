import "./Home.scss";
import { BannerSection } from "./components/BannerSection";
import { TopCreatorsSection } from "./components/TopCreatorsSection";

export default function Home() {
  return (
    <main className="main">
      <BannerSection />
      <TopCreatorsSection />
    </main>
  );
}
