export enum Breakpoints {
  DESKTOP = 1280,
  TABLET = 834,
  MOBILE = 375,
}

export interface IBanner {
  _id: string;
  assetName: string;
  imgUrl: string;
  createdBy: string;
  creatorNickName: string;
  creatorAvatarUrl: string;
}

export interface ICreator {
  _id: string;
  nickName: string;
  avatarUrl: string;
  volume: number;
  soldNft: number;
  followers: number;
  bio: string;
  socialLinks: {
    youtube: string;
    twitter: string;
    instagram: string;
  };
  assets: unknown[];
  totalSales: number;
}
