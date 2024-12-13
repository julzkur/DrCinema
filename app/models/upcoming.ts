
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

    constructor(
    id: string,
    title: string,
    year: string,
    poster: string = "",
    date: string,
    ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.poster = poster;
    this.date = date;
    }

    toObject() {
    return {
        id: this.id,
        title: this.title,
        year: this.year,
        poster: this.poster,
        date: this.date,
    };
    }
}

export default UpcomingModel;