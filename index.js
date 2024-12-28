import express from "express";
import serveHotApi from "guole.fun.api";

const app = express();

app.use("/*.png", express.static("public"));
app.use("/*.ico", express.static("public/ico"));
app.use("/package.json", express.static("guole.fun.api.package.json"));

app.use(serveHotApi());

export default app;