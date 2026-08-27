const { ImageKit } = require("@imagekit/nodejs");

let client;

function getImageKit() {
  if (client) return client;

  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!privateKey) {
    throw new Error("IMAGEKIT_PRIVATE_KEY is required");
  }

  client = new ImageKit({ privateKey });
  return client;
}

module.exports = { getImageKit };
