export interface Cinema {
    id: string;
    name: string;
    phoneNumber: string;
    website: string;
    address: string;
    movies: string[];
    description: string;
  }
  
  export class CinemaModel {
    constructor(
      public id: string,
      public name: string,
      public phoneNumber: string,
      public website: string,
      public address: string,
      public movies: string[],
      public description: string,
    ) {}
  
    toJson(): string {
      return JSON.stringify({
        id: this.id,
        name: this.name,
        phoneNumber: this.phoneNumber,
        website: this.website,
        address: this.address,
        movies: this.movies || [],
        description: this.description,
      });
    }
  
    static fromJSON(json: string): CinemaModel {
      const data = JSON.parse(json);
      return new CinemaModel(data.id, data.name, data.phoneNumber, data.website, data.address, data.movies, data.description); 
    }
  }
  
  export default Cinema;