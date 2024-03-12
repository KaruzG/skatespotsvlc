import express from "express";
const app  = express();

app.get("/", (req, res) => {
    res.send("First Endpoint")
})

app.listen(5000);