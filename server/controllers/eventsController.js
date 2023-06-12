import { StatusCodes } from "http-status-codes";
import Event from "../models/Events.js";

export const listEvents = async (req, res) => {
  try {
    const events = await Event.find();
    return res.status(StatusCodes.OK).json(events);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const createEvent = async (req, res) => {
  try {
    const createdEvent = await Event.create({
      name: req.body.name,
      description: req.body.description,
      linkToWebsite: req.body.linkToWebsite,
    });
    return res.status(StatusCodes.OK).json(createdEvent);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const removeEvent = async (req, res) => {
  try {
    const toDelete = await Event.findByIdAndDelete(req.params.id);
    console.log("deleted:", toDelete);
    return res.status(200).json(toDelete);
  } catch (err) {
    console.log("error", err);
  }
};
export default { listEvents, createEvent, removeEvent };
