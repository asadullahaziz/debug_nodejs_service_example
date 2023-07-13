const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.send({"message": "Hello World!"});
});


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});