
export type Genre = {
ID: number;
Name: string;
NameEN: string;
};
  

export class MovieModel {
    id: string;
    title: string;
    year: string;
    genres: Genre[];
    thumbnail: string;
    poster: string;
    plot: string;
    durationMinutes: string;
    showtimes: {
        cinema_name: string;
        schedule: { time: string; purchase_url: string; info: string }[];
      }[];
    trailers: {
      id: string;
      results: {
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: string;
        type: string;
      }[];
    }[];

  constructor(
    id: string,
    title: string,
    year: string,
    genres: Genre[],
    thumbnail: string = "",
    poster: string = "",
    plot: string = "No plot available",
    durationMinutes: string,
    showtimes: {
        cinema_name: string;
        schedule: { time: string; purchase_url: string; info: string }[];
      }[],
    trailers: {
      id: string,
      results: {
        id: string,
        iso_639_1: string,
        iso_3166_1: string,
        key: string,
        name: string,
        site: string,
        size: string,
        type: string
      }[]

    }[]
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.genres = genres;
    this.thumbnail = thumbnail;
    this.poster = poster;
    this.plot = plot;
    this.durationMinutes = durationMinutes;
    this.showtimes = showtimes;
    this.trailers = trailers
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      year: this.year,
      genres: this.genres,
      thumbnail: this.thumbnail,
      poster: this.poster,
      plot: this.plot,
      durationMinutes: this.durationMinutes,
      showtimes: this.showtimes,
      trailers: this.trailers,
    };
  }
}

export default MovieModel;