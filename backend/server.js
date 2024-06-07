const axios = require('axios');
bodyParser =require('body-parser');
var express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;
app.use(cors());
var mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const secretKey = 'bauwow';
///////////////////////
app.use(bodyParser.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "dbtest"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.post("/register", function(req, res) {
  const reqBody = req.body;
  const userName = reqBody.userName;
  const userEmail = reqBody.userEmail;
  const userPassword = reqBody.userPassword;

  // Register
  const queryString = "INSERT INTO users (userName, userPassword, userEmail) VALUES (?, ?, ?)";
  const values = [userName, userPassword, userEmail];

  connection.query(queryString, values, function (err, result) {
      if (err) {
          console.error("An error occurred:", err);
          // Send an error response to the client
          res.status(500).send("An error occurred while inserting data into the database.");
      } else {
          console.log("1 record successfully inserted into db");
          // Send a success response to the client
          res.status(200).send("Data inserted successfully.");
      }
  });
});

//Login
app.post("/login", function(req, res) {
  const { userName, userPassword } = req.body;

  // Query to check if the username and password match
  const queryString = "SELECT * FROM users WHERE userName = ? AND userPassword = ?";
  const values = [userName, userPassword];

  connection.query(queryString, values, function(err, results) {
      if (err) {
          console.error("An error occurred:", err);
          res.status(500).send("An error occurred while performing login.");
      } else {
          if (results.length > 0) {
              // User authenticated, generate and send token
              const user = results[0];
              const token = jwt.sign({ id: user.userId, username: user.userName }, secretKey, { expiresIn: '1h' });
              res.status(200).json({ message: "Login successful", token,userId:user.userId });
          } else {
              // User not found or invalid credentials, send error response
              res.status(401).send("Invalid username or password");
          }
      }
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
  });
}

app.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Ai acces la această rută protejată', user: req.user });
});
/////////////////////
app.post('/reviews', (req, res) => {
  const { rating, userId, movieId, review, reviewDate } = req.body;
  const queryString = "INSERT INTO Reviews (rating, userId, movieId, review, reviewDate) VALUES (?, ?, ?, ?, ?)";
  const values = [rating, userId, movieId, review, reviewDate];

  connection.query(queryString, values, function(err, result) {
      if (err) {
          console.error("An error occurred:", err);
          // Send an error response to the client
          res.status(500).send("An error occurred while inserting review into the database.");
      } else {
          console.log("Review successfully inserted into the database");
          // Send a success response to the client
          res.status(200).send("Review inserted successfully.");
      }
  })});


  app.get('/otherReviews', (req, res) => {
    const movieId = req.query.movieId;

    if (!movieId) {
        return res.status(400).send("Movie ID is required");
    }

    const queryString = "SELECT reviewId, rating, userID, review, reviewDate FROM reviews WHERE movieId = ?";
    const values = [movieId];

    connection.query(queryString, values, function (err, results) {
        if (err) {
            console.error("An error occurred:", err);
            return res.status(500).send("An error occurred while fetching reviews.");
        }

        if (results.length > 0) {
          console.log(results);
            res.status(200).send(results);
        } else {
            return res.status(404).send("No reviews found for the given movie ID");
        }
    });
});

//////////

app.get('/userinfo', (req, res) => {
  const { userId } = req.query;
  const query = 'SELECT userName FROM Users WHERE userId = ?';
  connection.query(query, [userId], (err, result) => {
    if (err) {
      console.error('eroare la afisarea informatiilor:', err);
      res.status(500).send('eroare la afisarea informatiilor');
    }else {
      console.log('informatiile au fost afisate cu succes');
      res.status(200).send(result);
    }
  });
});



//API for getting max 10 names of movies associated with the search query through the api
app.get('/search', async function (request, response) {
      const movie_name = request.query.movie_name;
      const queryString = "SELECT * FROM Movies WHERE title LIKE ?";
      connection.query(queryString, [movie_name + '%'], function(err, results) {
        if (err) {
            console.error("An error occurred:", err);
            response.status(500).send("An error occurred while searching for movie.");
        } else {
            if (results.length > 0) {
                response.status(200).json({ movie: results[0] });
            } else {
                response.send("No results found");
            }
        }
      });
});

app.post('/user/addfilm',(req, res) =>{
  const { userId,movieId } = req.body;
  const query = 'INSERT INTO UsersFilms (userId, movieId) VALUES (?, ?)';
  connection.query(query, [userId, movieId], (err, result) =>{
    if(err) {
      console.err('eroare la adaugarea filmului:',err);
      res.status(500).send('eroare la adaugarea filmului');
    }else {
      console.log("filmul a fost adaugat cu succes");
      res.status(201).send('filmul a fost adaugat cu suuces')
    }
  });
});

app.delete('/user/films/:userId/:movieId', (req, res) => {
  const { userId, movieId } = req.params;
  const query = 'DELETE FROM UsersFilms WHERE userId = ? AND movieId = ?';
  connection.query(query, [userId, movieId], (err, result) =>{
    if (err) {
      console.error('eroare la stergerea filmului:', err);
      res.status(500).send('eroare la stergerea filmului');
    }else {
      console.log('filmul a fost sters cu succes');
      res.status(200).send('filmul a fost sters cu succes');
    }
  });
});


app.get('/user/films',(req, res) =>{
  const { userId } = req.query;
  const query = 'SELECT movieId FROM UsersFilms WHERE userId = ?';
  connection.query(query, userId, (err, result) =>{
    if(err) {
      console.err('eroare la adaugarea filmului:',err);
      res.status(500).send('eroare la adaugarea filmului');
    }else
      if(result.length > 0) {
        movieIds = result.map((item) => item.movieId);
        const query2 = 'SELECT * FROM Movies WHERE movieId IN (?)';
        connection.query(query2, [movieIds], (err, result) =>{
          if(err) {
            console.log('eroare la adaugarea filmului:',err);
            res.status(500).send('eroare la adaugarea filmului');
          }else {
            console.log('filmele au fost afisate cu succes');
            res.status(200).send(result);
          }
        });
      }
      });
});

app.get('/allfilms', (req, res) => {
  const query = 'SELECT * FROM Movies';
  connection.query(query, (err, result) => {
    if (err) {
      console.error('eroare la afisarea filmelor:', err);
      res.status(500).send('eroare la afisarea filmelor');
    }else {
      console.log('filmele au fost afisate cu succes');
      res.status(200).send(result);
    }
  });
});

app.get('/userinfo', (req, res) => {
  const { userId } = req.query;
  const query = 'SELECT * FROM Users WHERE userId = ?';
  connection.query(query, [userId], (err, result) => {
    if (err) {
      console.error('eroare la afisarea informatiilor:', err);
      res.status(500).send('eroare la afisarea informatiilor');
    }else {
      console.log('informatiile au fost afisate cu succes');
      res.status(200).send(result);
    }
  });
});

app.post('/edit/:userId/:userName', (req, res) => {
  const { userId, userName } = req.params;
  const query = 'UPDATE Users SET userName = ? WHERE userId = ?';
  connection.query(query, [userName, userId], (err, result) => {
    if (err) {
      console.error('eroare la editarea informatiilor:', err);
      res.status(500).send('eroare la editarea informatiilor');
    }else {
      console.log('informatiile au fost editate cu succes');
      res.status(200).send('informatiile au fost editate cu succes');
    }
  });
});

app.post('/editpass/:userId/:password', (req, res) => {
  const { userId, password } = req.params;
  const query = 'UPDATE Users SET userPassword = ? WHERE userId = ?';
  connection.query(query, [password, userId], (err, result) => {
    if (err) {
      console.error('eroare la editarea informatiilor:', err);
      res.status(500).send('eroare la editarea informatiilor');
    }else {
      console.log('informatiile au fost editate cu succes');
      res.status(200).send('informatiile au fost editate cu succes');
    }
  });
});

app.listen(PORT, () => {
console.log(`Express server running at http://localhost:${PORT}/`);
});
