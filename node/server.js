const express = require('express');
const app = express();
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

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

//// Fetch product functions endpoints 

// Get all products 
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

// Get desktop products
app.get('/products/desktops', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "desktops"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

// Get hardware products
app.get('/products/hardware', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "hardware"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

// Get laptop products
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

// Get monitor products
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

// Get networking products
app.get('/products/networking', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "networking"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

// Get all peripheral products
app.get('/products/peripherals', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "peripherals"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

// Get all tablet products
app.get('/products/tablets', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "tablets"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

//// Cart functions endpoints 

// Get a cart details by its cartId
app.get('/carts/:cartId', async (req,res) => {
  connection.query(
    `SELECT * FROM carts WHERE cid = ${req.params.cartId}`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

// Get a user's cart by his/her uid 
app.get('/users/:uid/cart', async (req,res) => {
  connection.query(
    `SELECT * FROM carts WHERE uid = ${req.params.uid}`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

//// Login and signup endpoints 

// Login endpoint with JWT authentication 
app.post('/user/login', async(req, res) => {

  try {
    secretKey = "HCI_project^_2023_"
    connection.query(   
      `SELECT * FROM users WHERE username = "${req.body.usr}" AND password = "${req.body.pwd}"`,
      function(err, results, fields) {
        if(err) {
          res.send([]).status(500).end();
        } else { 
          // Check if the user was found in the database
          if (results.length > 0) {  
            // generate a JWT token and return the token as a response
            token = jwt.sign({ userId: results[0].uid, userName: results[0].username }, secretKey, { expiresIn: '1h' });
            res.json({ token });  
          } else {
            res.send([]).status(500).end();
          }
        }  
      }
    );
 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

});

//// Order functions endpoints 

// Insert a product in cart 
app.post('/carts', async (req,res) => {
  connection.query(
    `INSERT INTO carts (uid, pid, insertionDate, amount, price) 
    VALUES (${req.body.uid}, ${req.body.pid}, NOW(), ${req.body.amount}, ${req.body.price})`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});  

// Create a product order 
app.delete('/cart/:id', async (req,res) => {
  connection.query(
    `DELETE FROM carts WHERE cid = ${req.params.id}`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);
});

// Delete a product from cart 
app.delete('/cart/:id', async (req,res) => {
  connection.query(
    `DELETE FROM carts WHERE cid = ${req.params.id}`,
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