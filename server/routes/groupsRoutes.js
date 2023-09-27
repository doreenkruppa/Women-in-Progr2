import express from "express";
import {
  listGroups,
  createGroup,
  deleteGroup,
} from "../controllers/groupsController.js";
const router = express.Router();

router.get("/list", listGroups);
router.post("/create", createGroup);
router.delete("/delete/:id", deleteGroup);

export default router;
