const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
    imageUrl: "https://via.placeholder.com/150?text=Inception",
    imageBGposter: require('../assets/inception-poster.jpg'),
    imageBGbanner: require('../assets/inception-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Alice", content: "Amazing movie with a complex plot!", reviewrating: 5 },
      { username: "Bob", content: "A bit hard to follow, but worth it.", reviewrating: 5 },
    ],
    duration: "148 min",
    director: "Christopher Nolan",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 2,
    title: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    imageUrl: "https://via.placeholder.com/150?text=The+Matrix",
    imageBGposter: require("../assets/the-matrix-poster.jpg"),
    imageBGbanner: require('../assets/the-matrix-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Charlie", content: "A groundbreaking sci-fi movie.", reviewrating: 5 },
      { username: "Dave", content: "Action-packed and thought-provoking.", reviewrating: 5 },
    ],
    duration: "136 min",
    director: "Lana Wachowski, Lilly Wachowski",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://via.placeholder.com/150?text=Interstellar",
    imageBGposter: require('../assets/interstellar-poster.jpg'),
    imageBGbanner: require('../assets/interstellar-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Eve", content: "A visually stunning and emotional journey.", reviewrating: 4 },
      { username: "Frank", content: "Complex and deeply moving.", reviewrating: 5 },
    ],
    duration: "169 min",
    director: "Christopher Nolan",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 4,
    title: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.",
    imageUrl: "https://via.placeholder.com/150?text=The+Dark+Knight",
    imageBGposter: require('../assets/the-dark-knight-poster.jpg'),
    imageBGbanner: require('../assets/the-dark-knight-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Grace", content: "An exceptional superhero movie.", reviewrating: 5 },
      { username: "Hank", content: "Heath Ledger's performance is legendary.", reviewrating: 5 },
    ],
    duration: "152 min",
    director: "Christopher Nolan",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
    imageUrl: "https://via.placeholder.com/150?text=Pulp+Fiction",
    imageBGposter: require('../assets/pulp-fiction-poster.jpg'),
    imageBGbanner: require('../assets/pulp-fiction-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Ivy", content: "A classic Tarantino film with a unique style.", reviewrating: 5 },
      { username: "Jack", content: "Brilliant dialogue and storytelling.", reviewrating: 5 },
    ],
    duration: "154 min",
    director: "Quentin Tarantino",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 6,
    title: "Fight Club",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
    imageUrl: "https://via.placeholder.com/150?text=Fight+Club",
    imageBGposter: require('../assets/fight-club-poster.jpg'),
    imageBGbanner: require('../assets/fight-club-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Karen", content: "A thought-provoking and intense movie.", reviewrating: 5 },
      { username: "Leo", content: "Twists and turns that keep you engaged.", reviewrating: 5 },
    ],
    duration: "139 min",
    director: "David Fincher",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 7,
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, and more unfold through the perspective of an Alabama man.",
    imageUrl: "https://via.placeholder.com/150?text=Forrest+Gump",
    imageBGposter: require('../assets/forrest-gump-poster.jpg'),
    imageBGbanner: require('../assets/forrest-gump-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Mona", content: "Heartwarming and inspiring.", reviewrating: 5 },
      { username: "Nick", content: "Tom Hanks delivers a fantastic performance.", reviewrating: 5 },
    ],
    duration: "142 min",
    director: "Robert Zemeckis",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 8,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    imageUrl: "https://via.placeholder.com/150?text=The+Godfather",
    imageBGposter: require('../assets/the-godfather-poster.jpg'),
    imageBGbanner: require('../assets/the-godfather-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Olivia", content: "A masterpiece of cinema.", reviewrating: 5 },
      { username: "Paul", content: "An epic tale of family and power.", reviewrating: 5 },
    ],
    duration: "175 min",
    director: "Francis Ford Coppola",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    imageUrl: "https://via.placeholder.com/150?text=The+Shawshank+Redemption",
    imageBGposter: require('../assets/the-shawshank-redemption-poster.jpg'),
    imageBGbanner: require('../assets/the-shawshank-redemption-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Quinn", content: "An uplifting story of hope and friendship.", reviewrating: 5 },
      { username: "Rita", content: "One of the best films ever made.", reviewrating: 5 },
    ],
    duration: "142 min",
    director: "Frank Darabont",
    datefilm: "Oct 1, 2000",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.",
    imageUrl: "https://via.placeholder.com/150?text=LOTR",
    imageBGposter: require('../assets/the-lord-of-the-rings-the-fellowship-of-the-ring-poster.jpg'),
    imageBGbanner: require('../assets/the-lord-of-the-rings-the-fellowship-of-the-ring-banner.jpg'),
    rating: 1,
    reviews: [
      { username: "Sam", content: "An epic fantasy adventure.", reviewrating: 5 },
      { username: "Tina", content: "A visually stunning and engaging film.", reviewrating: 5 },
    ],
    duration: "178 min",
    director: "Peter Jackson",
    datefilm: "Oct 1, 2000",
  },
];

export default movies;
