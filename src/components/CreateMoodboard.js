//import React, { useState } from "react";
import TestPage from "../components/DnDgrit/TestPage";
import React, { Component } from "react";
import AddPhoto from "../components/AddPhoto";
//import Button from "react-bootstrap/Button";

class CreateMoodboard extends Component {
  render() {
    return (
      <div>
        <h2>CREATE YOUR MOODBOARD</h2>
        <AddPhoto />
        <TestPage />
      </div>
    );
  }
}

export default CreateMoodboard;

// function AddImage() {
//   const [image, setImage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const uploadImage = async e => {
//     const files = e.target.files;
//     const data = new FormData();
//     data.append("file", files[0]);
//     data.append("upload_preset", "Moodboard");
//     setLoading(true);

//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/cloud-laura/image/upload",
//       {
//         method: "post",
//         body: data
//       }
//     );

//     const file = await res.json();
//     console.log("image Url ", file);
//     setImage(file.secure_url);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2>CREATE YOUR MOODBOARD</h2>
//       <br />

//       <button variant="light">Add moodboard to your page</button>

//       <input
//         type="file"
//         name="file"
//         placeholder="Upload an image"
//         onChange={uploadImage}
//       />

//       {loading ? (
//         <h3>Loading...</h3>
//       ) : (
//         <img src={image} style={{ width: "300px" }} />
//       )}
//       <br />
//       <TestPage />
//     </div>
//   );
// }

// export default AddImage;
