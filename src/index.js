import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import routes from "./router";
//0l6StaIYfdSchMzg

class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://outlet-lingeries:outlet@outlet-lingeries.ci7ugqj.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //cors serve para definir limitações de uso da api criada
    this.server.use(cors());

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
