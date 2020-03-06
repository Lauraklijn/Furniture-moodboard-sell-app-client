import React, { useState } from "react";
//import Board from "../components/Board";
import TestPage from "../components/DnDgrit/TestPage";
import Button from "react-bootstrap/Button";

function CreateMoodboard() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Moodboard");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/cloud-laura/image/upload",
      {
        method: "post",
        body: data
      }
    );

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h2>CREATE YOUR MOODBOARD</h2>
      <br />
      <p>
        <Button variant="light">Add moodboard to your page</Button>
      </p>
      <br />
      <p>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
      </p>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: "300px" }} />
      )}
      <br />
      <TestPage />
    </div>
  );
}

export default CreateMoodboard;
