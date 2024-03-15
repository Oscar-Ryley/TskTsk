const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  fs.readFile('../client/index.html', function (error, html) {
    if (error) {
      res.writeHeader(404, { 'Content-Type': 'text/html' });
      res.write('<h1>404 error file not found</h1>');
    };
    res.writeHeader(200, { 'Content-Type': 'text/html' });
    res.write(html);
  });
});

module.exports = app;