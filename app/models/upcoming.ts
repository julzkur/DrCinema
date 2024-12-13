export type Genre = {
  ID: number;
  Name: string;
  NameEN: string;
};

export class UpcomingModel {
  id: string;
  title: string;
  year: string;
  poster: string;
  date: string;
  trailers: {
    id: string;
    results: {
      id: string;
      iso_639_1: string;
      iso_3166_1: string;
      key: string;
      name: string;
      site: string;
      size: number;
      type: string;
    }[];
  }[];

  constructor(
    id: string,
    title: string,
    year: string,
    poster: string = "",
    date: string,
    trailers: {
      id: string;
      results: {
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: number;
        type: string;
      }[];
    }[] = []
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.poster = poster;
    this.date = date;
    this.trailers = trailers;
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      year: this.year,
      poster: this.poster,
      date: this.date,
      trailers: this.trailers,
    };
  }
}

export default UpcomingModel;
