import { TokenService } from "./GetToken";
import * as FileSystem from 'expo-file-system';


const TOKEN_DIR = FileSystem.documentDirectory + 'token/';

interface Movie {
  _id: string;
  id: number;
  ids: {
    imdb: string | null;
    rotten: string | null;
    tmdb: string | null;
  };
  title: string;
  alternativeTitles: string;
  year: string;
  durationMinutes: number;
  genres: {
    ID: number;
    Name: string;
    NameEN: string;
  }[];
  poster: string;
  actors_abridged: {
    name: string;
  }[];
  directors_abridged: {
    name: string;
  }[];
  ratings: {
    imdb: string | null;
    rotten_audience: string | null;
    rotten_critics: string | null;
  };
  showtimes: {
    cinema: {
      id: number;
      name: string;
    };
    schedule: {
      time: string;
      purchase_url: string;
    }[];
  }[];
  certificate: {
    is: string;
    color: string;
    number: string;
  };
  trailers: {
    id: number;
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
  omdb: {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    tomatoMeter: string;
    tomatoImage: string;
    tomatoRating: string;
    tomatoReviews: string;
    tomatoFresh: string;
    tomatoRotten: string;
    tomatoConsensus: string;
    tomatoUserMeter: string;
    tomatoUserRating: string;
    tomatoUserReviews: string;
    tomatoURL: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }[];
  plot: string;
}


class MovieService {
  getToken = async () => {
    (async () => {
      const tokenService = new TokenService();
      await tokenService.ensureDirectory();
      const success = await tokenService.fetchAndStoreToken();
      console.log(success ? "Token fetched and stored." : "Failed to fetch token.");
    })();
  }

  getStoredTokenData = async (): Promise<{ success: boolean; message: string; token: string } | null> => {
    const path = TOKEN_DIR + "apiToken.json";
    const fileInfo = await FileSystem.getInfoAsync(path);
    if (!fileInfo.exists) {
      return null;
    }
    const content = await FileSystem.readAsStringAsync(path);
    const parsedContent = JSON.parse(content);
    console.log(parsedContent.success);
    console.log(parsedContent.message);
    console.log(parsedContent.token);
    return parsedContent;
  }
  /**
  * Gets all movies now playing in cinemas and provides the following prop:
  *
  * PROP    | DESCRIPTION                    | EXAMPLE VALUE
  * ------- | ------------------------------ | -------------
  * title   | Filters movies by title name:   | The Revenant
  */
  getNowPlayingMoviesByTitle = async (): Promise<{}> => {
    
  }
  
  /**
  * Gets all movies now playing in cinemas and provides the following prop:
  *
  * PROP     | DESCRIPTION                    | EXAMPLE VALUE
  * -------- | ------------------------------ | -------------
  * imdbid   | Filters movies by imdbid:       | tt1663202
  */
  getNowPlayingMoviesByImdbId = async (): Promise<{}> => {

  }

  /**
  * Gets all movies now playing in cinemas and provides the following prop:
  *
  * PROP         | DESCRIPTION                                   | EXAMPLE VALUE
  * ------------ | --------------------------------------------- | -------------
  * imdbrating   | Filters movies with bigger rating than number: | 8.0
  */
  getNowPlayingMoviesByImdbRating = async (): Promise<{}> => {

  }

  /**
  * Gets all movies now playing in cinemas and provides the following prop:
  *
  * PROP     | DESCRIPTION                                  | EXAMPLE VALUE
  * -------- | -------------------------------------------- | -------------
  * showtime | Filters movies by showtime bigger than time: | 20:00
  */
  getNowPlayingMoviesByShowtime = async (): Promise<{}> => {

  }
  
  /**
  * Gets all movies now playing in cinemas and provides the following prop:
  *
  * PROP        | DESCRIPTION                    | EXAMPLE VALUE
  * ----------- | ------------------------------ | -------------
  * certificate | Filters movies by certificate: | 16
  */
  getNowPlayingMoviesByCertificate = async (): Promise<{}> => {

  }

  /**
  * Gets all movies now playing in cinemas and provides the following prop:
  *
  * PROP  | DESCRIPTION              | EXAMPLE VALUE
  * ----- | -----------------------  | -------------
  * actor | Filters movies by actor: | Tom Hardy
  */
  getNowPlayingMoviesByActor = async (): Promise<{}> => {

  }

  /**
  * Gets all movies now playing in cinemas and provides the following prop:
  *
  * PROP     | DESCRIPTION                 | EXAMPLE VALUE
  * -------- | --------------------------  | -------------
  * director | Filters movies by director: | Alejandro
  */
  getNowPlayingMoviesByDirector = async (): Promise<{}> => {

  }

  /**
  * Gets all movies now playing in cinemas and provides the following prop:
  *
  * PROP    | DESCRIPTION                | EXAMPLE VALUE
  * ------- | -------------------------- | -------------
  * mongoid | Filters movies by mongoid: | 56e50...
  */
  getNowPlayingMoviesByMongoId = async (): Promise<{}> => {

  }
}