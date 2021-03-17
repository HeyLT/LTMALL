import { request } from "./request.js";

export function getHomeNetData() {
  return request({
    url: "http://api.coindesk.com/v1/bpi/currentprice.json"
  });
}
