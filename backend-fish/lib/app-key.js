module.exports = Buffer.from(process.env.APP_KEY, `base64`).toString();
