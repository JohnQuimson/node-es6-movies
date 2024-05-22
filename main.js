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

  toString() {
    return `${this.title} è un ${this.type} di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
  }
}

class TvSerie extends Movie {
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.seasons = seasons;
  }

  toString() {
    return `${this.title} è una ${this.type} di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
  }
}
