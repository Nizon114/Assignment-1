/*********************************************************************************
*  BTI325 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
*
*  Name: Nizon          Student ID: 107229213            Date: September 27, 2024
*
*  Online (Vercel) URL: _______________________________________________________
*
********************************************************************************/
const express = require('express');
const path = require("path");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("Nizon - 107229213");
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.listen(HTTP_PORT, () => { console.log(`server listening on: ${HTTP_PORT}`) });
