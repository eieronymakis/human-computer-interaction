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

// Function to generate total order ID
function generateOrderID(uid) {
  // Get current date and time
  const currentDate = new Date();
  // Format the date and time as desired (for example, YYYYMMDD-HHMMSS)
  const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}-${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}${currentDate.getSeconds().toString().padStart(2, '0')}`;
  // Concatenate the strings 'ORDER-', formatted date, and user's UID
  const orderID = `ORDER-${formattedDate}-${uid}`; 
  return orderID;
}

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
          return res.status(200).json({ message: 'Something went wrong!' });
        } else { 
          // check if the user was found in the database
          if (results.length > 0) {  
            // generate a JWT token and return the token as a response
            token = jwt.sign({ userId: results[0].uid, userName: results[0].username }, secretKey, { expiresIn: '1h' });
            res.json({ token });  
          } else {
            return res.status(200).json({ message: 'Wrong username or password!' });
          }
        }  
      }
    );
 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

});

// Signup endpoint 
app.post('/user/signup', async(req, res) => {

  let input_username = req.body.username;
  let input_email = req.body.email;

  if (input_username && input_email) {

    if (input_username === '' || input_email === '' || input_username === ' ' || input_email === ' ') {
      return res.status(409).json({ message: 'Username and email cannot be empty!' });
    } else {
      connection.query(   
        `SELECT * FROM users WHERE username = "${input_username}" OR email = "${input_email}"`,
        function(err, results, fields) {
          if(err) {
            res.send([]).status(500).end();
          } else { 
            // check if username or email already exists in the database
            if (results.length > 0) {
              return res.status(409).json({ message: 'Username or email already exists!' });
            }
            else {   
    
              connection.query(
                `INSERT INTO users (name, surname, username, password, email, city, address) 
                VALUES ("${req.body.name}", "${req.body.surname}", "${input_username}", "${req.body.pwd}", 
                "${input_email}", "${req.body.city}", "${req.body.addr}");`,
                function(err, results1, fields) {
                  if(err)
                    res.send([]).status(500).end();
                  else
                    return res.status(200).json({ message: 'User created successfully!' });
                }
              );
            }
          }
        }
      );
    }

  } else {
    return res.status(409).json({ message: 'Username and email cannot be empty!' });
  }

});

//// Order functions endpoints 

// Create a new order (new totalOrderId) and insert it in the database 
app.post('/orders/', async (req,res) => {

  uid = req.body.uid; // get user ID from request body
  if (!uid) {
    return res.status(400).send('User ID is required in the request body.');
  }
  const totalOrderID = generateOrderID(uid);
  //const currentDatetime = new Date().toISOString().replace(/[-T:Z.]/g, ''); // get current datetime and format it
  //const totalOrderID = 'ORDER-'${currentDatetime}-${uid};    

  connection.query(
    `INSERT INTO orders (uid, pid, totalOrderId, orderDate, orderAmount, orderCost)  
    VALUES (${req.body.uid}, ${req.body.pid}, "${totalOrderID}", NOW(), ${req.body.amount}, ${req.body.cost})`,
    function(err, results, fields) {
      if(err) {
        res.send([]).status(500).end();
      }
      else { 
        // Create a response object with the totalOrderID field
        const responseObject = {
          totalOrderId: totalOrderID
        };
        // Send the response as JSON
        res.json(responseObject);
      }  
    }
  );

});       

// Get all orders of a user based on uid 
app.get('/users/:uid/orders', async (req,res) => {
  connection.query(
    `SELECT totalOrderId FROM orders WHERE uid = "${req.params.uid}" GROUP BY totalOrderId`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);  
}); 

// Get all products from an existing total order (existing totalOrderId)
app.get('/orders/:totalOrderId/products', async (req,res) => {
  connection.query(
    `SELECT * FROM orders WHERE totalOrderId = "${req.params.totalOrderId}"`,
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

// Delete a product from user's cart 
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

//// User endpoints 

// Get user data based on user's uid
app.get('/users/:uid', async(req, res) => {
  connection.query(
    `SELECT * FROM users WHERE uid = "${req.params.uid}"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
  res.send(data);  
});

// Update user data based on user's uid 
app.post('/users/:uid/update', async (req,res) => {
  connection.query(
    `UPDATE users SET name = "${req.body.name}", surname = "${req.body.surname}", username = "${req.body.username}", 
    password = "${req.body.pwd}", email = "${req.body.email}", city = "${req.body.city}", 
    address = "${req.body.addr}" WHERE uid = "${req.params.uid}" AND username = "${req.body.username}"`,
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