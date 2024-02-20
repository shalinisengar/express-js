const path = require("path");
const express = require("express");
const app = express();
//dynamic site
// console.log(path.join(__dirname,'/public'));
// console.log(__dirname);

const statipath = path.join(__dirname, "/GymWebsite-main");

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('new')
})
// app.use(express.static(statipath));
app.get("/", (req, res) => {
  res.send("express server");
});

app.listen(5000, () => {
  console.log("server is on port 5000");
});