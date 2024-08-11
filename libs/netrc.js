import fs from "node:fs";
import path from "path";
import { encrypt } from "./crypt.js";

const homePath = process.env.HOME;
const netrcFile = path.join(homePath, ".netrc");

const store = ({ machine, login, password }) => {
  const credentials = `machine ${machine} login ${login} password ${password}\n`;
  fs.appendFileSync(netrcFile, credentials);
};
const update = () => {};
const remove = () => {};
const parse = () => {
  return fs
    .readFileSync(netrcFile, "utf8")
    .split("\n")
    .filter((line) => line)
    .map((line) => {
      const entry = line.split(" ");
      return {
        machine: entry[1],
        login: entry[3],
        password: entry[5],
      };
    });
};
const get = (machine) => {
  return parse().filter((entry) => entry.machine === machine)[0];
};

export { store, parse, get };
