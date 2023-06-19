import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import eventsRoutes from "./routes/eventsRoutes.js";
import pioneersRoutes from "./routes/pioneersRoutes.js";
import articlesRoutes from "./routes/articlesRoutes.js";
import groupsRoutes from "./routes/groupsRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
//connecting to the database
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use("/api/events", eventsRoutes);
//app.use("/api/home", homeRoutes);
app.use("/api/pioneers", pioneersRoutes);
//app.use("/api/groups", groupsRoutes);
app.use("/api/articles", articlesRoutes);
app.use("/api/groups", groupsRoutes);
app.all("*", (req, res) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("invalid request");
});
app.listen(4000, () => {
  console.log("server is running");
});
