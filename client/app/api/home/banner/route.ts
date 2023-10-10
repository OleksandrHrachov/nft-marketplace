import { NextResponse } from "next/server";
import { IBanner } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      banner {
        assetName
        createdBy
        imgUrl
        creatorNickName
        creatorAvatarUrl
      }
    }
  `;

  const banner = await getClient()
    .query<{ banner: IBanner }>({
      query,
    })
    .then((res) => res.data.banner);

  return NextResponse.json(banner);
}
