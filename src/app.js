const express = require('express')
const path = require('path');
require('./db/conn');
const Register = require('./models/registers')

const app = express();
const port = process.env.PORT || 3000;

var file = path.join(__dirname, '../public');

app.use(express.static(file))
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// // console.log(file)

app.get("/", function (req, res) {
  res.sendFile(file);
});


app.post("/", async (req, res) => {
  const name = req.body.name;
  const contact = req.body.contact;
  const email = req.body.email;

try {
  const register_user = new Register({
    name : name,
    email : email,
    contact : contact,
  })

  const registered = await register_user.save();
  res.redirect("/");
} catch (error) {
  res.status(400).send(error);
}
  // console.log(name);
  // console.log(contact);
  // console.log(email);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})