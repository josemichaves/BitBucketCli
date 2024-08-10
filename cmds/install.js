import { input, select, password } from "@inquirer/prompts";
import netrc from "../libs/netrc.js";

/**
const authType = await select({
  message: "How you want to be authenticated?",
  choices: [
    {
      name: "Basic Auth",
      value: "basicAuth",
      description:
        "Most simple way, just email and password but insecure and not recommended.",
    },
    {
      name: "Access Token",
      value: "accessToken",
      description:
        "This is the recommended way, generate an AccessToken and that will be.",
    },
    {
      name: "OAut2.0",
      value: "oAuth",
      description:
        "This is the most secure way, but needs some configuration for your side.",
    },
  ],
});

switch (authType) {
  case "basicAuth": {
    const email = await input({
      message: "Enter you atlassian email: ",
      required: true,
      validate: (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
    });

    const pass = await password({
      message: "Enter your password: ",
      mask: true,
    });

    netrc.store({
      machine: "atlassian.com",
      login: email,
      password: pass,
    });

    console.log(netrc.parse());

    console.log(
      "All the data will be stored in your computer, it will never leave it",
    );
  }
}
*/
