const axios = require('axios');
 bodyParser =require('body-parser');
var express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;
app.use(cors());

var mysql = require('mysql2');


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

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});

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

  // Use parameterized query to avoid SQL injection
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
              // User authenticated, send success response
              res.status(200).send("Login successful");
          } else {
              // User not found or invalid credentials, send error response
              res.status(401).send("Invalid username or password");
          }
      }
  });
});