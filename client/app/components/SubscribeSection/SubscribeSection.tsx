import { BASE_URL } from "@/app/utils/endpoint";
import { ImageComponent } from "../ImageComponent";
import "./SubscribeSection.scss";
import { SubscribeInput } from "../SubscribeInput";
import { ISudscribe } from "@/app/types";

import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";

export async function getSubscribe(): Promise<ISudscribe> {
  const query = gql`
    query {
      subscribe {
        imgUrl
        title
        description
      }
    }
  `;

  const subscribe = await getClient()
    .query<{ subscribe: ISudscribe[] }>({
      query,
    })
    .then((res) => res.data.subscribe[0])
    .catch((e) => {
      console.log("ERROR home-subscribe-route =>", e);
      return {
        imgUrl: "",
        title: "",
        description: "",
      };
    });

  return subscribe;
}

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
