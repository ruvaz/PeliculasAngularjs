// Importar el núcleo de Angular
import {Component} from 'angular2/core';
// import {Pelicula} from './model/pelicula';
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {FooterComponent} from "./components/peliculas-footer.component";

//configurar rutas
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";

import {RouteConfig} from "angular2/router";

import {Router} from "angular2/router";
import {Pelicula} from "./model/pelicula";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component(
    {
        selector: 'my-app',
        templateUrl: `app/view/peliculas.html`,
        directives: [PeliculasListComponent, FooterComponent, ROUTER_DIRECTIVES] //array de todos los componentes que se desean utilizar
    }
)

@RouteConfig([
    {path:"/peliculas",name:"Peliculas",component:PeliculasListComponent, useAsDefault:true}
])


// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo: string = `Peliculas con angular2`;


}