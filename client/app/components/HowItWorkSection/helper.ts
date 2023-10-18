import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";
import { IHowItWorkCard } from "@/app/types";

export async function getCards(): Promise<IHowItWorkCard[]> {
  const query = gql`
    query {
      howItWorkCards {
        _id
        title
        imgUrl
        description
      }
    }
  `;

  const cards = await getClient()
    .query<{ howItWorkCards: IHowItWorkCard[] }>({
      query,
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log("ERROR home-creators-route =>", e);
      return { howItWorkCards: [] };
    });

  return cards.howItWorkCards;
}