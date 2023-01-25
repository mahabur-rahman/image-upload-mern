const express = require("express");
const router = express.Router();

const { getAllImage, postImage } = require("../controllers/post.controller");

// get all image
router.get("/get-all", getAllImage);
// post image
router.post("/upload", postImage);

module.exports = router;
