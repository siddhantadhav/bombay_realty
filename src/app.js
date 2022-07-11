const express = require("express");
const app = express();
const path = require("path")
require("./db/conn");
const Register = require("./models/submit")
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
// console.log(static_path);


app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.send("index")
});



app.listen(port, () => {
    console.log(`server running`);
});