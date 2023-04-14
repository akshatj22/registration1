import axios from "axios"
import React from "react";
import { useState } from "react";
import ReactCrop from 'react-image-crop'
import style from "./Cropper.module.css"
import 'react-image-crop/dist/ReactCrop.css'

function Cropper(props) {
    const [src, selectFile] = useState(null)
    const handleFileChange = e => {
        const file = e.target.files[0];
        selectFile(URL.createObjectURL(file))
    }
    const [image, setImage] = useState(null)
    const [crop, setCrop] = useState({ aspect: 1 / 1 })
    const [result, setResult] = useState(null);


    function getCroppedImg() {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );
        const base64Image = canvas.toDataURL('image/jpeg')
        setResult(base64Image);
    }


    function saveImage() {
        axios.post('http://localhost:5000/upload-cropped-image', { image: result, fileName: 'cropped-image.jpg' })
          .then((res) => {
            console.log(res.data);
            alert("Image Saved")
          })
          .catch((err) => {
            console.log('Error:', err);
            alert("Error. Please try again")
          });
          
      }
    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.col}>
                    <div className={style.box}>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                </div>
                {src && <div className={style.col}>
                    <div className={style.box}>
                        <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop} style={{maxWidth: "400px"}} />
                        <button className="btn btn-danger" onClick={getCroppedImg}>Crop Image</button>
                        
                        {result && <button className="btn btn-primary" onClick={saveImage}>Save</button>}
                    </div>
                </div>}
                {result && <div className={style.col}>
                    <div className={style.box}>
                        <img src={result} alt='Cropped Image' className={style.croppedImage} />
                    </div>
                </div>}
            </div>
        </div>
    )

}

export default Cropper;
