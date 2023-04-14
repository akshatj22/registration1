const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require("cors");
const morgan = require('morgan');

app.use(bodyParser.json());

app.use(morgan('tiny'));
// const upload = multer({ dest: "uploads/" });

const corsAllow = {
  origin: "*"
}

app.use(cors(corsAllow));

const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
    cb(null,'Uploads')
  },
  filename: (req,file,cb)=>{
    console.log(file)
    cb(null , 'upload-image.jpeg')

  }
})
const upload = multer({storage: storage})

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const imagePath = path.join(__dirname, "Uploads", req.file.filename); 
  fs.writeFile(imagePath,upload)
  res.json({ message: "File uploaded successfully" });
});


app.post('/upload-cropped-image', (req, res) => {
  const base64Image = req.body.image.split(';base64,').pop();
  const fileName = req.body.fileName || `${uuidv4()}.jpg`;
  const savePath = path.join(__dirname, 'Cropped-image', fileName);
  fs.writeFile(savePath, base64Image, { encoding: 'base64' }, err => {
    if (err) {
      console.log('Error:', err);
      res.status(500).send('Failed to save image');
    } else {
      console.log('Image saved successfully:', savePath);
      res.send('Image saved successfully');
    }
  });
});


app.listen(5000, () => console.log('Server started on port 5000'));
