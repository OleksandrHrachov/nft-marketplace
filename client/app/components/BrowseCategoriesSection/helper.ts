import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";
import { ICategory } from "@/app/types";

export async function getCategories(): Promise<ICategory[] | []> {
  const query = gql`
    query {
      categories {
        category
        imageUrl
        iconUrl
      }
    }
  `;

  const categories = await getClient()
    .query<{ categories: ICategory[] }>({
      query,
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log("ERROR home-categories-route =>", e);
      return { categories: [] };
    });

  return categories.categories
};