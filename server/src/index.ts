require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { routers } from "./router";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/nft", routers);

const start = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO_DB - connected");
    app.listen(PORT, () =>
      console.log(`server started on => http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("Error =>", error);
  }
};

start();
