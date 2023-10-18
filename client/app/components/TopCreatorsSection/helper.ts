import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";
import { ICreator } from "@/app/types";

export async function getCreators(): Promise<ICreator[]> {
  const query = gql`
    query {
      artists {
        _id
        nickName
        avatarUrl
        totalSales
      }
    }
  `;

  const creators = await getClient()
    .query<{ artists: ICreator[] }>({
      query,
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log("ERROR home-creators-route =>", e);
      return { artists: [] };
    });
  return creators.artists;
}