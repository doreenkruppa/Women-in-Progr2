import express from "express";

import {
  listPioneers,
  createPioneer,
} from "../controllers/pioneersController.js";
const router = express.Router();

router.get("/list", listPioneers);
router.post("/create", createPioneer);

export default router;
