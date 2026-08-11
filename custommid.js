const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Data ",newDate().toLocalStringString());
    console.log(" Method ",req.method);
    console.log("URL ", req.originalUrl());
    next();
});

app.get( "/", (req, res) => {
    res.send("Middleware Demo v0.0.1");

});

app.get("/about",(req, res) =>{
    res.json({
        application: "Expressjs Middleware demo",
        developer: "San362",
        course: "Bsc",
        version: "0.0.1",
        description: " This is an Demo version of custom middleware using Expressjs"
    });
});

app.get("/error",(req, res, next) => {
    const err = new Error(" Something went wrong ");
    next(err);
});

app.use((req, res) => {
    res.status(404).json({
        error: "invalid route",
        message: "The requested route was not found"
    });
});

app.use((err, req, res, next ) => {
    console.error("Error", err.message);
});
