import { Schema, model } from "mongoose";

const pioneerSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  linkToWebsite: { type: String, required: true },
  imageadresse: { type: String, required: true },
});

const Pioneer = model("pioneer", pioneerSchema);
export default Pioneer;
