const express = require("express");
const multer = require("multer");
const path =require("path");
const app = express();

const storage = multer.diskStorage({
    destination:"uploads/",
    filename: (req, file, cb) => {
        
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("profile"), (req, res) => {
    res.send("Profile image uploaded successfully! ");
    
});

app.listen(3002, () => {
    console.log("Server running on http://localhost:3002");
});

