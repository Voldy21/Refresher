const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");
const io = require("socket.io")(http);

// const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

// const Message = require("./message");
// const mongoose = require("mongoose");

// mongoose.connect(uri, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

app.use(express.static(path.join(__dirname, "..", "client", "build")));

http.listen(port, () => console.log(`Listening on Port ${port}`));
