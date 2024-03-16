const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const app = express();
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());
db = new sqlite3.Database("data.db")

let tasks = [];

function sql_all() {
  db.serialize(() => {
    db.each("SELECT * FROM tblTask", (err, row) => {
      tasks.push([row.Name, row.Length, row.Completed, row.Done]);
    });
  });
};

sql_all()

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

// app.post - POST REQUEST TO ADD TO TABLE
//db.run("INSERT INTO tblTask (TaskID, Name, Length, Completed, Done) VALUES (?, ?, ?, ?, ?)", [1, "Connect the Frontend and the Backend", 3, 0, false])

app.get('/tasks/all', (req, res) => {
  res.status(200).send(tasks);
});


module.exports = app;