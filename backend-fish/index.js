require(`dotenv`).config();
const express = require(`express`);
const app = express();
const moduleAlias = require(`module-alias`);
const path = require(`path`);
moduleAlias.addAliases({
  '@': __dirname,
  v1: path.resolve(__dirname, `src/v1`),
});

const routes = require(`v1/router`);

routes.forEach(route => app.use(`/api/v1${route.prefix}`, route.router))


app.listen(3004, () => console.log(`Listening...`));