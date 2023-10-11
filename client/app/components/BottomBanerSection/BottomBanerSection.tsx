import { Breakpoints, IBanner } from "@/app/types";
import "./BottomBanerSection.scss";
import { ImageComponent } from "../ImageComponent";
import { BASE_URL } from "@/app/utils/endpoint";

const getBottomBanner = async (): Promise<IBanner> => {
  const bottomBanner = await fetch(
    "http://localhost:3000/api/home/bottomBanner",
    {
      method: "GET",
    }
  ).then((res) => res.json()).then(data => data[0]);

  return bottomBanner;
};

export default async function BottomBanerSection() {
  const bottomBanner = await getBottomBanner();

  if (!bottomBanner.imgUrl) return null;

  return (
    <section className="bottom-banner">
      <ImageComponent
        imgClass="bottom-banner__image-front"
        src={`${BASE_URL}/${bottomBanner.imgUrl}` || ""}
        alt={"banner"}
        width={Breakpoints.DESKTOP}
        height={660}
        tableWidth={Breakpoints.TABLET}
        mobileWidth={Breakpoints.MOBILE}
      />

      <ImageComponent
        imgClass="bottom-banner__image-back"
        src={`${BASE_URL}/${bottomBanner.imgUrl}` || ""}
        alt={"banner"}
        width={Breakpoints.DESKTOP}
        height={660}
        tableWidth={Breakpoints.TABLET}
        mobileWidth={Breakpoints.MOBILE}
      />
    </section>
  );
}
