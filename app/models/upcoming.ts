
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

    constructor(
    id: string,
    title: string,
    year: string,
    poster: string = "",
    ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.poster = poster;
    }

    toObject() {
    return {
        id: this.id,
        title: this.title,
        year: this.year,
        poster: this.poster,
    };
    }
}

export default UpcomingModel;