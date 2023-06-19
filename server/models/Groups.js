import { Schema, model } from "mongoose";
const groupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  img: { type: String, required: true },
});
const Group = model("group", groupSchema);
export default Group;
