const express = require("express");
const app = express();
function auth(req , res , next) {
    const authHeader = req.header.authorise;
    if (! authHeader) {
        return res.status(401).send("Authentication Rrquired");
    }

    const token = authHeader.split("")[1];
    if (token == "secret.token") {
        req.user = {
            id:1234,
            username:"ezioauditorie25",
            password:"Firenze25"
        }
        next();
    }
    else {
        res.status(403).send("Invalid token");
    }
}

app.get("/api/protected" ,auth , (req, res) => {
    res.json ({
        message: "Protected Data",
        user:req.username
    });

});
app.listen(3080);
console.log("localhost:3080");

