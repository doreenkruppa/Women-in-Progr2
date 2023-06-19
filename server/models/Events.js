import { Schema, model } from "mongoose";

//schema is the structure of our document
const eventSchema = new Schema({
  name: { type: String, required: true },
  dateOfEvent: { type: Date, required: false },
  description: { type: String, required: true },
  linkToWebsite: { type: String, required: true },
});

//create the model based on the schema
const Event = model("event", eventSchema);

//export this model to the rest of our application
export default Event;
