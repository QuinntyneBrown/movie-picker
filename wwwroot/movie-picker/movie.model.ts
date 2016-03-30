import { Theatre } from "./theatre.model";

export class Movie { 
	id:number;
    name: string;
    priority: number;
    theatres: Array<Theatre>;
}
