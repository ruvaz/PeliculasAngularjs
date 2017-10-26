import {Injectable} from "angular2/core";
import {getMockPeliculasArr} from "./mock.peliculas";
import {Pelicula} from "../model/pelicula";

@Injectable()
export class PeliculasService{

    getPeliculas() {
        return  getMockPeliculasArr ;
    }

    insertPelicula(pelicula: Pelicula){
        Promise.resolve(getMockPeliculasArr).then((peliculas:Pelicula[])=>peliculas.push(pelicula))
    }
}
