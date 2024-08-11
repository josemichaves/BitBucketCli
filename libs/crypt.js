import crypto from "crypto";
import fs from "fs";
let secretKey = process.env.SECRET_KEY;

const generateSecretKey = () => {
  const key = crypto.randomBytes(16).toString("hex");
  fs.writeFileSync(".env", `SECRET_KEY=${key}`);
  process.env.SECRET_KEY = key;
  secretKey = key;
};

const encrypt = (data) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-gcm", secretKey, iv);
  let encryptedData = cipher.update(data, "utf-8", "hex");
  encryptedData += cipher.final("hex");

  return encryptedData;
};
const decrypt = (value) => {
  const iv = crypto.randomBytes(16);
  const decipher = crypto.createCipheriv("aes-256-gcm", secretKey, iv);
  let decryptedData = decipher.update(value, "hex", "utf-8");
  decryptedData += decipher.final("utf-8");

  console.log(decryptedData, value);

  return decryptedData;
};

export { generateSecretKey, encrypt, decrypt };
