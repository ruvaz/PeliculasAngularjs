import {Injectable} from "angular2/core";
import {getMockPeliculasArr} from "./mock.peliculas";

@Injectable()
export class PeliculasService{

    getPeliculas() {
        return  getMockPeliculasArr ;
    }

}
