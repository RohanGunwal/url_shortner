import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import urlRoute from "./routes/urlRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", urlRoute);

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  }
);
