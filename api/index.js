const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;
const uri =
  "mongodb+srv://dbAdmin:password1234@cluster0.bzbxx.mongodb.net/filmvisarna?retryWrites=true&w=majority";

const movieRoutes = require("./routes/movieRoutes");
const theaterRoutes = require("./routes/theaterRoutes");

app.use(express.json());

app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/theaters", theaterRoutes);

(async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
})();