import express from "express";
import { brandsRouter } from "./routes/brands.route";
const server = express();

server.use(express.json());
server.use(brandsRouter);

server.listen(3333, () => {
    console.log("Running at 3333");
});