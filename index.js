#! /usr/bin/env node

import dotenv from "dotenv";

dotenv.config({
  override: true,
});

import { program } from "commander";

const instance = program
  .name("bb")
  .version("1.0.0")
  .description("BitBucket Tool")
  .executableDir("cmds");

instance.command("install", "Perform installation of the tool", {
  executableFile: "install",
});

instance.command("users", "Requests of users", {
  executableFile: "users",
});

program.parse();
