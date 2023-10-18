import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";
import { IBanner } from "@/app/types";

export async function getBanner(): Promise<IBanner | null> {
  const query = gql`
    query {
      banner {
        _id
        assetName
        createdBy
        imgUrl
        creatorNickName
        creatorAvatarUrl
        assetId
      }
    }
  `;

  const banner = await getClient()
    .query<{ banner: IBanner }>({
      query,
    })
    .then((res) => res.data.banner)
    .catch((e) => {
      console.log("ERROR home-banner-route =>", e);
      return null;
    });

  return banner;
}
