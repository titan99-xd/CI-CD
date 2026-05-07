const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.static("dist"));

// Exercise 12: Health check
app.get("/health", (req, res) => {
  res.send("ok");
});

// Exercise 10 & 11: Version check
app.get("/version", (req, res) => {
  res.send("1"); // Change this to '2' later to check deployment
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
