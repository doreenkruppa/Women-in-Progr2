import express from "express";

import {
  listPioneers,
  createPioneer,
  deletePioneer,
} from "../controllers/pioneersController.js";
const router = express.Router();

router.get("/list", listPioneers);
router.post("/create", createPioneer);
router.delete("/delete/:id", deletePioneer);

export default router;
