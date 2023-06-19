import express from "express";
import {
  listGroups,
  createGroup,
  removeGroup,
} from "../controllers/groupsController.js";
const router = express.Router();

router.get("/list", listGroups);
router.post("/create", createGroup);
router.delete("/delete/:id", removeGroup);

export default router;
