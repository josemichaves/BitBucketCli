import fs from "node:fs";
import path from "path";
const homePath = process.env.HOME;
const netrcFile = path.join(homePath, ".netrc");
export default {
  store: ({ machine, login, password }) => {
    const credentials = `machine ${machine} login ${login} password ${password}\n`;
    fs.appendFileSync(netrcFile, credentials);
  },
  update: () => {},
  remove: () => {},
  parse: () => {
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
  },
  get: (machine) => {
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
      })
      .find((entry) => entry.machine === machine);
  },
};
