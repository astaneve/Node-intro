const express = require("express");
const { appendFile } = require("fs");
require("dotenv").config();

const port = process.env.PORT || 8080;


appendFile.listen(port, () => console.log(`SErver is running on port ${port}`));