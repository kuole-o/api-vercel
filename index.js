import serveHotApi from "guole.fun.api";

const port = process.env.PORT;
console.log("port: ", port);

serveHotApi(port);