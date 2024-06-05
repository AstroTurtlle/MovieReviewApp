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
  password: "root",
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
  const name = reqBody.username;
  const email = reqBody.email;
  const password = reqBody.password;

  // Register
  const queryString = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
  const values = [name, email, password];

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
  const { username, password } = req.body;

  // Query to check if the username and password match
  const queryString = "SELECT * FROM user WHERE name = ? AND password = ?";
  const values = [username, password];

  connection.query(queryString, values, function(err, results) {
      if (err) {
          console.error("An error occurred:", err);
          res.status(500).send("An error occurred while performing login.");
      } else {
          if (results.length > 0) {
              // User authenticated, generate and send token
              const user = results[0];
              const token = jwt.sign({ id: user.id, username: user.name }, secretKey, { expiresIn: '1h' });
              res.status(200).json({ message: "Login successful", token });
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

//API for getting max 10 names of movies associated with the search query through the api
app.get('/search', async function (request, response) {
  try {
      const movie_name = request.query.movie_name;
      const options = {
        method: 'GET',
        url: 'https://movie-database-alternative.p.rapidapi.com/',
        params: {
          s: movie_name,
          r: 'json',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'd7e60cceb7msheeb63338a7c39f0p135e29jsnd407abda12c8',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
      };
      const res = await axios.request(options);
      const completed = res.data.Response;
      console.log(res.data);
      if (completed === 'False') {
          response.send({error: 1});
      }
      else {
          const nrOfMovies = request.query.nrOfMovies;
          const data = res.data.Search.slice(0,nrOfMovies).map(movie => ({
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
          }));
          data.error = 0;
          response.send(data);
      }
  } catch (error) {
      console.error(error);
  }
});

app.post('/user/films',(req, res) =>{
  const { userId,movieId } = req.body;
  const query = 'INSERT INTO UsersFilms (userId, movieId) VALUES (?, ?)';
  db.query(query, [userId, movieId], (err, result) =>{
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
  const query = 'DELETE FROM UserFilms WHERE userId = ? AND movieId = ?';
  db.query(query, [userId, movieId], (err, result) =>{
    if (err) {
      console.error('eroare la stergerea filmului:', err);
      res.status(500).send('eroare la stergerea filmului');
    }else {
      console.log('filmul a fost sters cu succes');
      res.status(200).send('filmul a fost sters cu succes');
    }
  });
});

app.post('/reviews', (req, res) => {
  const { rating, userId, movieId, review, reviewDate } = req.body;
  const query = 'INSERT INTO Reviews (rating, userId, movieId, review, reviewDate) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [rating, userId, movieId, review, reviewDate], (err, result) =>{

  
    if(err) {
      console.error('eroare la adaugarea recenziei:',err);
      result.status(500).send('eroare la adaugarea recenziei');
    }else {
      console.log("recenzia a fost adaugata cu succes");
      result.status(201).send('recenzia a fost adaugata cu succes');
    }
  });
});

app.listen(PORT, () => {
console.log(`Express server running at http://localhost:${PORT}/`);
});
