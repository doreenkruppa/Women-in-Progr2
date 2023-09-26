import Pioneer from "../models/Pioneers.js";

export const listPioneers = async (req, res) => {
  try {
    const pioneers = await Pioneer.find();
    return res.status(200).json(pioneers);
  } catch (err) {
    return res.status(500).json({ message: err.toString() });
  }
};

export const createPioneer = async (req, res) => {
  try {
    const createdPioneer = await Pioneer.create({
      name: req.body.name,
      description: req.body.description,
      linkToWebsite: req.body.linkToWebsite,
      imageadresse: req.body.imageadresse,
    });
    return res.status(200).json(createdPioneer);
  } catch (err) {
    return res.status(500).json({ message: err.toString() });
  }
};

export default { listPioneers, createPioneer };
