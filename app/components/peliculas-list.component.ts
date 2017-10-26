import {Component} from 'angular2/core';
import {Pelicula} from "../model/pelicula";
import {PeliculasService} from "../services/peliculas.service";

import {ROUTER_DIRECTIVES,RouteConfig,Router} from "angular2/router";

@Component(
    {
        selector: 'peliculas-list',
        templateUrl: `app/view/peliculas-list.html`,
        providers:[PeliculasService],
        directives:[ROUTER_DIRECTIVES]
    }
)

export class PeliculasListComponent{
    public pelicula: Pelicula;
    public peliculaElegida: Pelicula;
    public mostrarDatos:boolean;
    public peliculas:Array<Pelicula>;


    constructor(private _peliculasService:PeliculasService) {
        this.peliculas = this._peliculasService.getPeliculas();
        this.mostrarDatos = false;

        this.peliculaElegida=new Pelicula(1,"Superman","pedro",null);

        this.peliculaElegida=this.peliculas[0];
        this.pelicula = this.peliculas[0];  //primera pelicula del listado

        this.debug();
    }

    debug(){
        console.log(this.peliculas);


    }
    onShowHide(){
        if( this.mostrarDatos === true )
            this.mostrarDatos=false;
        else
            this.mostrarDatos= true;
    }

    onCambiarPelicula(pelicula){
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;
    }
}