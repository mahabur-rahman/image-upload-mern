import { useState, useEffect } from "react";
import avatar from "../images/mahabur.jpg";

import axios from "axios";

const url = "http://localhost:5000/api/upload";

function Upload() {
  const [postImage, setPostImage] = useState({ myFile: "" });
  const [showImage, setShowImage] = useState([]);
  // get image
  useEffect(() => {
    const getImage = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/get-all`);

        setShowImage(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getImage();
  }, []);

  const createPost = async (newImage) => {
    try {
      await axios.post(url, newImage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
    console.log("Uploaded");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPostImage({ ...postImage, myFile: base64 });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="custom-file-upload">
          <img src={postImage.myFile || avatar} alt="" />
        </label>

        <input
          type="file"
          lable="Image"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />

        <h3>Doris Wilder</h3>
        <span>Designer</span>

        <button type="submit">Submit</button>
      </form>

      {/* show image */}
      {showImage.map((img) => {
        return <img src={img.myFile} key={img._id} alt="" />;
      })}
    </div>
  );
}

export default Upload;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
