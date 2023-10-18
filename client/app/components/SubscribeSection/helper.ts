import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";
import { ISudscribe } from "@/app/types";

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