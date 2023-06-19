import Group from "../models/Groups.js";
export const listGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    return res.status(200).json(groups);
  } catch (err) {
    return res.status(500).json({ message: err.toString() });
  }
};
export const createGroup = async (req, res) => {
  try {
    const createdGroup = await Group.create({
      name: req.body.name,
      description: req.body.description,
      contact: req.body.contact,
      img: req.body.img,
    });
    return res.status(200).json(createdGroup);
  } catch (err) {
    return res.status(500).json({ message: err.toString() });
  }
};

export const removeGroup = async (req, res) => {
  try {
    const toDelete = await Group.findByIdAndDelete(req.params.id);
    console.log("deleted:", toDelete);
    return res.status(200).json(toDelete);
  } catch (err) {
    console.log("error", err);
  }
};

export default { listGroups, createGroup, removeGroup };
