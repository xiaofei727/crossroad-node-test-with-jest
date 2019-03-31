const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/addJob', (req, res) => {

  /*const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
  });*/

  const connection = mysql.createConnection({
    host: 'crossroads.cnky2exjg0bc.us-east-2.rds.amazonaws.com',
    user: 'crossroads',
    password: 'tamu431edu',
    port: '3306',
  });
  res.setHeader('Content-Type', 'application/json');

  if(req.query.name === undefined 
       || req.query.description === undefined
       || req.query.skills === undefined 
       || req.query.qualifications === undefined 
       || req.query.extra === undefined 
       || req.query.contact === undefined ){
    res.send(JSON.stringify({insert: "Failure", errorType: "QueryParamMissing"}));
    return;
  }

  if(req.query.name === '' 
       || req.query.description === ''
       || req.query.skills === '' 
       || req.query.qualifications === ''
       || req.query.extra === '' 
       || req.query.contact === '' ){
    res.send(JSON.stringify({insert: "Failure", errorType: "QueryInputError"}));
    return;
  }
  
  

  const post = [
    req.query.name,
    req.query.description,
    req.query.skills,
    req.query.qualifications,
    req.query.extra,
    req.query.contact,
  ];
//  console.log(post);

  connection.connect((err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    // eslint-disable-next-line no-unused-vars
    const query = connection.query('INSERT INTO crossroads.PostedJobs (StartUp, Description, SkillsNeeded, Qualifications, Extra, Contact) VALUES (?);', [post], (err1, result) => {
      if (err1) {
        // eslint-disable-next-line no-console
        console.log(err1);
        res.send(JSON.stringify('{"Insert": "Failure"}'));
      } else {
        res.send(JSON.stringify('{"Insert": "Success"}'));
      }
    });
  });
});

app.get('/api/showAllJobs', (req, res) => {
  const connection = mysql.createConnection({
    host: 'crossroads.cnky2exjg0bc.us-east-2.rds.amazonaws.com',
    user: 'crossroads',
    password: 'tamu431edu',
    port: '3306',
  });

  /*const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
  });*/

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');

  connection.connect((err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    // eslint-disable-next-line no-unused-vars
    const query = connection.query('SELECT * FROM crossroads.PostedJobs;', (err1, result) => {
      if (err1) {
        // eslint-disable-next-line no-console
        console.log(err1);
      } else {
        res.send(JSON.stringify(result));
//        console.log(result.length);

      }
    });
  });
});

// eslint-disable-next-line no-console
module.exports = app