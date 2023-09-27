const express = require('express');
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '172.20.0.7',
  user: 'root',
  password: 'xyz123',
  database: 'visionstudio',
});

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

app.use(allowCrossDomain)

// get all products 
app.get('/products', async (req,res) => {
  connection.query(
    `SELECT * FROM products`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

// get laptops
app.get('/products/laptops', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "laptops"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

// get monitors 
app.get('/products/monitors', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "monitors"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

app.get('/', (req, res) => {
  res.send({ message: 'Message From Express Backend!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 