#! /usr/bin/env node

import { program } from "commander";

const instance = program
  .name("bb")
  .version("1.0.0")
  .description("BitBucket Tool")
  .executableDir("cmds");

instance.command("install", "Perform installation of the tool", {
  executableFile: "install",
});

program.parse();
