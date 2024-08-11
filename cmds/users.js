import { get } from "../libs/netrc.js";
import prettyjson from "prettyjson";

const data = await fetch("https://api.github.com/repositories", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${get("github.com").password}`,
    Accept: "application/json",
  },
}).then(async (response) => {
  return prettyjson.render(await response.json());
});

console.log(data);
