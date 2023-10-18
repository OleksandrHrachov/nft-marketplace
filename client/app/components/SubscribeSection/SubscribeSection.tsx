import { BASE_URL } from "@/app/utils/endpoint";
import { ImageComponent } from "../ImageComponent";
import "./SubscribeSection.scss";
import { SubscribeInput } from "../SubscribeInput";
import { getSubscribe } from "./helper";

export default async function SubscribeSection() {
  const subscribe = await getSubscribe();

  return (
    <section className="container subscribe">
      <div className="subscribe__container">
        <div className="subscribe__container-image-wrapper">
          <ImageComponent
            imgClass="subscribe__container-image"
            src={`${BASE_URL}/${subscribe.imgUrl}` || ""}
            alt={"image"}
            width={425}
            height={310}
            tableWidth={300}
            mobileWidth={315}
          />
        </div>
        <div className="subscribe__container-content">
          <h3 className="subscribe__container-content-title">
            {subscribe.title}
          </h3>
          <p className="subscribe__container-content-description">
            {subscribe.description}
          </p>
          <SubscribeInput formClass={'subscribe__form'} buttonClass={'subscribe__button'} inputClass={'subscribe__input'} />
        </div>
      </div>
    </section>
  );
}
