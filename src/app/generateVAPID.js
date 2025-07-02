// generateVAPID.js
/* eslint-disable @typescript-eslint/no-require-imports */
const webpush = require("web-push");

const keys = webpush.generateVAPIDKeys();

console.log("🔑 VAPID PUBLIC KEY:\n", keys.publicKey);
console.log("🔐 VAPID PRIVATE KEY:\n", keys.privateKey);
