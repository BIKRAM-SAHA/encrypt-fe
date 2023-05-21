var CryptoJS = require("crypto-js");

export const encrypt = (msg, securitykey) => {

  var encryptedText = CryptoJS.AES.encrypt(msg, securitykey).toString();

  console.log("Encrypted message: " + encryptedText);

  return encryptedText;
};

export const decrypt = (encryptedText, securitykey) => {

  var bytes = CryptoJS.AES.decrypt(encryptedText, securitykey);

  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  console.log(originalText);

  return originalText;
};
