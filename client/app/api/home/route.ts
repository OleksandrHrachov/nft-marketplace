import { NextResponse } from "next/server";
import { IBanner, IArtist } from "../../types";
import { BANNER_URL, ARTIST_URL } from "../../utils/endpoint";

const getData = async <T>(url: string): Promise<T> => {
  return await fetch(url)
    .then((res) => res.json())
    .catch((e) => console.log("home-route =>", e));
};

export async function GET(req: Request) {
  const bannerResp = await getData<IBanner[]>(BANNER_URL);
  const endpoint_artist = `${ARTIST_URL}/${bannerResp[0].createdBy}`;

  const artistResp = await getData<IArtist>(endpoint_artist);

  const bannerObject = {
    bannerImage: {
      imgUrl: bannerResp[0].imgUrl,
      assetName: bannerResp[0].assetName,
    },
    artist: {
      nickName: artistResp.nickName,
      avatarUrl: artistResp.avatarUrl,
    },
  };
  return NextResponse.json(bannerObject);
}
