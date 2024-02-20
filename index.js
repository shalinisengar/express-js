// get = read
// post = create
// put = update
// delete = delete
//-----------------------------------------------------------------------------------------------------------------------

const path = require("path");
const express = require("express");
const app = express();

// console.log(path.join(__dirname,'/public'));
// console.log(__dirname);

const statipath = path.join(__dirname, "/GymWebsite-main");
app.use(express.static(statipath));
app.get("/", (req, res) => {
  res.send("express server");
});

app.listen(5000, () => {
  console.log("server is on port 5000");
});
