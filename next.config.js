// next.config.js
const isProd = process.env.NODE_ENV === "production";

export const assetPrefix = isProd ? "/gnaraine.github.io/" : "";
export const images = {
  domains: ["images.ctfassets.net"],
};
export const compiler = {
  styledComponents: true,
};
