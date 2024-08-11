import { input, select, password } from "@inquirer/prompts";
import { get, store } from "../libs/netrc.js";
import { decrypt, generateSecretKey } from "../libs/crypt.js";

// Generate secretKey if necessary
if (!process.env.SECRET_KEY) {
  generateSecretKey();
}

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

    store({
      machine: "github.com",
      login: email,
      password: pass,
    });
    break;
  }
  case "accessToken": {
    const accessToken = await input({
      message: "Enter your access token: ",
      required: true,
    });

    store({
      machine: "github.com",
      password: accessToken,
    });
  }
}
