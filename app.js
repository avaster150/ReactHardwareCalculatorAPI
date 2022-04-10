const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const whitelist = ["http://localhost:3000"];
let corsOption = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allwoed by cors"));
    }
  },
};

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors(corsOption));

app.post("/api", (req, res) => {
  let productList = req.body.payload;
  console.log(productList);
});

app.listen(port, () => {
  console.log(`Server on port ` + port);
});
