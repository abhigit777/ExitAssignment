const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
   "mongodb+srv://abhinandha4532:abhi@cluster0.sf2uioi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });