import express from "express";
import {
  createEvent,
  listEvents,
  removeEvent,
} from "../controllers/eventsController.js";
const router = express.Router();

//GET: http://localhost:4000/api/events/list
router.get("/", listEvents);
//POST: http://localhost:4000/api/events/create
//EXAMPLE JSON - BODY
// {
// "name": "",
// "description": "",
// "linkToWebsite": "",
// }
router.post("/create", createEvent);
//DELETE: http://localhost:4000/api/events/delete
router.delete("/delete/:id", removeEvent);
export default router;
