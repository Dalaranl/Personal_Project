module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GIPHY_KEY: process.env.NEXT_PUBLIC_GIPHY_KEY,
    NEXT_PUBLIC_FIREBASE_APIKEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    NEXT_PUBLIC_FIREBASE_AUTHDOMAIN:
      process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECTID: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    NEXT_PUBLIC_FIREBASE_APPID: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  },
  trailingSlash: true,
  generateBuildId: () => "MuseDash",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/account": { page: "/account" },
    "/boards/list": { page: "/boards/list" },
    "/boards/new": { page: "/boards/new" },
    "/giphy": { page: "/giphy" },
    "/giphy/history": { page: "/giphy/history" },
    "/login": { page: "/login" },
    "/mypage": { page: "/mypage" },
    "/used/list": { page: "/used/list" },
    "/used/new": { page: "/used/new" },
    "/404": { page: "/404" },
  }),
};
