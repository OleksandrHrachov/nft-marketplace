export enum Breakpoints {
  DESKTOP = 1280,
  TABLET = 834,
  MOBILE = 375,
}

// export const BASE_URL = 'http://localhost:5000';
// export const BANNER_URL = "http://localhost:5000/nft/banner";
// export const ARTIST_URL = "http://localhost:5000/nft/artist";

export interface IBanner {
  _id: string;
  assetName: string;
  imgUrl: string,
  createdBy: string,
}

export interface IArtist {
  nickName: string;
  avatarUrl?: string;
}
