import {Component} from "angular2/core";
import {Router,RouteParams} from "angular2/router";

import {OnInit} from "angular2/core";

import {Pelicula} from "../model/pelicula";
import {PeliculasService} from "../services/peliculas.service";


@Component({
    // selector: "creaPelicula",
    templateUrl: 'app/view/crearPelicula.html',
    providers: [PeliculasService]
})

export class CrearPeliculaComponent implements OnInit{

    public tituloPelicula="";
    public nuevaPelicula:Pelicula;

    constructor (private _peliculasService:PeliculasService,
                 private _router: Router,
                 private _routeParams:RouteParams) {

    }


    onCrearPelicula (parameters: { titulo: any, director: any, anio: any }) {
        let {titulo, director, anio} = parameters;
        let pelicula: Pelicula = new Pelicula(77, titulo, director, anio);
        this._peliculasService.insertPelicula(pelicula);
        console.log(pelicula);
        this._router.navigate(['PeliculasUrl']);  //Uso de router para navegar
    }


    onSubmit (){
        this._peliculasService.insertPelicula(this.nuevaPelicula);
        console.log(this.nuevaPelicula);
        this._router.navigate(['PeliculasUrl']);  //Uso de router para navegar
    }

    ngOnInit():any{  //interface
        this.tituloPelicula = this._routeParams.get("titulo");  // si se encuentra
        this.nuevaPelicula = new Pelicula(0,
                                        this._routeParams.get("titulo"),
                                        this._routeParams.get("director"),
                                        parseInt(this._routeParams.get("anio"))
                                        );
    }

}