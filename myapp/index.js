const express = require("express");


const app = express();

app.get("/", (req, res) => {
    let message = "Hello World!";
    res.send({"message": message});
});


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});