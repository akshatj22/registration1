import React, { useState } from "react";
import style from "./upload.module.css";
import user from "./user.png"



function Upload() {
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setIsButtonDisabled(false);

  };
  const handleImageUpload = () => {
    if (!image) {
      return;
    }
    setIsUploading(true);
    setIsButtonDisabled(true);

    const formData = new FormData();
    formData.append("image", image);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setIsUploading(false);

        alert("Error uploading image. Please try again.");

      })
      .catch((error) => {
        console.error(error);
        setIsUploading(false);
        alert("Image Uploaded");
      });

  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image.trim()) {
      alert("Please fill all the required fields");
      return;
    }
  };
  return (
    <div className={style.body}>
      <div className={style.imageuploadbox} style={{ backgroundImage: `url(${image && URL.createObjectURL(image)})` }}>
        {image ? null : (
          <div className={style.imageuploadicon}>
            <img className={style.icon} src={user} alt="User-logo" />
          </div>
        )}
        <input className={style.open} type="file" accept="image/jpeg , image/png" onChange={handleImageChange} required />
      </div>
      <button className={style.btn} onClick={handleImageUpload} disabled={!image || isButtonDisabled} >
        {isUploading ? "Uploading..." : "Upload Image"}

      </button>


    </div>
  );
}


export default Upload;