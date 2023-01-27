import { IMG_FORMAT, IMG_PATH } from "../lib/constants";

export default function getImageUrl(appid) {
  return `${IMG_PATH}/${IMG_FORMAT}/${appid}.${IMG_FORMAT}`;
}
