const express = require("express");
const app = express();

app.use(express.json());
function validateUser(req , res, next) {
    const username = req.body.value;
    const email = req.body.value;
    const password = req.body.value;

    if(!username || username.length < 3) {
        return res.status(400).json({
            error:"User must be at leasr 3 characters"
        });
    }

    if(!email || !email.includes("@")) {
        return res.status(400).json({
            error:"Password must be atleast 6 Characters"
        });
    }
    next();
}

app.post("/app/users", validateUser, (req,res) => {
    
    res.status(201).json({
        message: "User created successfully"
    });
});

app.listen(3001);
console.log("localhost:3001");