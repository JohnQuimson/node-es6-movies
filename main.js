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

// ---------------------------
// MOVIE
// ---------------------------
class Movie {
  #title;
  #year;
  #genre;
  #rating;
  #type;

  constructor(title, year, genre, rating, type) {
    this.#title = title;
    this.#year = year;
    this.#genre = genre;
    this.#rating = rating;
    this.#type = type;
  }

  //title
  get title() {
    return this.#title;
  }
  set title(title) {
    this.#title = title;
  }
  //year
  get year() {
    return this.#year;
  }
  set year(year) {
    this.#year = year;
  }
  //genre
  get genre() {
    return this.#genre;
  }
  set genre(genre) {
    this.#genre = genre;
  }
  //rating
  get rating() {
    return this.#rating;
  }
  set rating(rating) {
    this.#rating = rating;
  }
  //type
  get type() {
    return this.#type;
  }
  set type(type) {
    this.#type = type;
  }

  toString() {
    return `${this.title} è un ${this.type} di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
  }
}

// ---------------------------
// TV SERIES
// ---------------------------
class TvSerie extends Movie {
  #seasons;

  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.#seasons = seasons;
  }

  get seasons() {
    return this.#seasons;
  }
  set seasons(seasons) {
    this.#seasons = seasons;
  }

  toString() {
    return `${this.title} è una ${this.type} di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
  }
}

// ---------------------------
// NEW ARRAY
// ---------------------------
const dataInstance = data.map((element) => {
  // type = movie
  if (element.type === 'movie') {
    return new Movie(
      element.title,
      element.year,
      element.genre,
      element.rating,
      element.type
    );

    // type = tv
  } else if (element.type === 'tv') {
    return new TvSerie(
      element.title,
      element.year,
      element.genre,
      element.rating,
      element.type,
      element.seasons
    );
  }
});

// ForEach per stampare l'istanza con gli elementi
dataInstance.forEach((instance) => console.log(instance.toString()));
console.log('');

// ---------------------------
// Rating by Genre function
// ---------------------------
function RatingByGenre(movies, genre) {
  // filtro i film in base al genere
  const filterMovie = movies.filter((movie) => movie.genre === genre);

  // somma dei rating
  const sumRating = filterMovie.reduce((sum, movie) => sum + movie.rating, 0);

  return sumRating / filterMovie.length;
}

const averageDramaRating = RatingByGenre(dataInstance, 'Drama');
const averageScifiRating = RatingByGenre(dataInstance, 'Sci-Fi');

console.log(`Media voti per il genere Drama è: ${averageDramaRating}`);
console.log(`Media voti per il genere Sci-Fi è: ${averageScifiRating}`);
console.log('');

// ---------------------------
// Genres list
// ---------------------------
function getGenre(array) {
  const noRepeatGenre = [];
  array.forEach((element) => {
    if (!noRepeatGenre.includes(element.genre)) {
      noRepeatGenre.push(element.genre);
    }
  });
  return noRepeatGenre;
}

const noRepeatGenre = getGenre(dataInstance);
console.log('Genres:', noRepeatGenre.toString());
console.log('');

// ---------------------------
// FILM FILTER BY GENRE, return toString
// ---------------------------
function filterByGenre(movies, genre) {
  const filterMovie = movies
    // creo nuovo array con solo elementi di quel genere
    .filter((movie) => movie.genre === genre)
    // dall'array filtrato ne creo un altro applicando toString
    .map((movie) => movie.toString());

  return filterMovie;
}

const ScifiMovies = filterByGenre(dataInstance, 'Sci-Fi');
console.log('Film di genere Sci-Fi:', ScifiMovies);
console.log('');

// ---------------------------
// CART
// ---------------------------
class Cart {
  constructor() {
    this.rentItem = [];
  }

  addItem(movie) {
    this.rentItem.push(movie);
  }

  removeItem(movie) {
    //mi ricavo l'indice del film da rimuovere
    const movieIndex = this.rentItem.indexOf(movie);
    this.rentItem.splice(movieIndex, 1);
  }
}
