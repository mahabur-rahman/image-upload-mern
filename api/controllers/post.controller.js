const PostModel = require("../models/postModel");

// get all image
const getAllImage = async (req, res) => {
  try {
    const data = await PostModel.find();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// post image
const postImage = async (req, res) => {
  const body = req.body;

  try {
    const newImage = await PostModel.create(body);

    // save on db
    await newImage.save();

    return res.status(201).json({ msg: "Image Uploaded.." });
  } catch (err) {
    return res.status(500).json(err);
  }
};

// exports
module.exports = { getAllImage, postImage };
