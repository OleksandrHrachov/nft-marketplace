import { NextResponse } from "next/server";
import { IBanner } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      bottomBanner{
    imgUrl
  }
    }
  `;

  const bottomBanner = await getClient()
    .query<{ bottomBanner: IBanner }>({
      query,
    })
    .then((res) => res.data.bottomBanner)
    .catch(e => {
      console.log('ERROR home-banner-route =>', e);
      return {};
    });

  return NextResponse.json(bottomBanner);
}
