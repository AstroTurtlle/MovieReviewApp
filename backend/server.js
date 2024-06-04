const axios = require('axios');
var express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

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