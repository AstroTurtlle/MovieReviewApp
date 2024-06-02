const axios = require('axios');
var express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;
//const mysql = require('mysql');
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

/*const db=mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'password',
  database: 'MovieReview'
});

db.connect(err =>{
  if(err){
    console.error('Eroare la conectarea bazei de date:',err);
  }else {
    console.log('Conectat la baza de date MovieReview');
  }
}); */
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