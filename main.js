const data = [
  { title: 'Titanic', year: 1997, genre: 'Drama', rating: 9, type: 'movie' },
  {
    title: 'Breaking Bad',
    year: 2008,
    genre: 'Drama',
    rating: 9.5,
    type: 'tv',
    seasons: 5,
  },
  {
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    type: 'movie',
  },
  {
    title: 'Game of Thrones',
    year: 2011,
    genre: 'Fantasy',
    rating: 9.3,
    type: 'tv',
    seasons: 8,
  },
  {
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.6,
    type: 'movie',
  },
];

class Movie {
  constructor(title, year, genre, rating, type) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.type = type;
  }
}

class TvSerie extends Movie {
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.seasons = seasons;
  }
}
