// Importar el núcleo de Angular
import {Component} from 'angular2/core';
// import {Pelicula} from './model/pelicula';
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {FooterComponent} from   "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto.component";
import {CrearPeliculaComponent} from "./components/crearPelicula.component";

//configurar rutas
import {ROUTER_DIRECTIVES,RouteConfig, Router} from "angular2/router";


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component(
    {
        selector: 'my-app',
        templateUrl: 'app/view/peliculas.html',
        directives: [
            PeliculasListComponent,
            FooterComponent,
            ContactoComponent,
            CrearPeliculaComponent,
            ROUTER_DIRECTIVES
        ] //array de todos los componentes que se desean utilizar
    }
)

@RouteConfig([
    {path:"/peliculas",name:"PeliculasUrl",component:PeliculasListComponent, useAsDefault:true},
    {path:"/crear-pelicula",name:"CrearPeliculaUrl",component:CrearPeliculaComponent},
    {path:"/crear-pelicula/:titulo/:director/:anio",name:"CrearPeliculaOtraUrl",component:CrearPeliculaComponent},
    {path:"/contacto",name:"ContactoUrl",component:ContactoComponent}
])


// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo: string = 'Peliculas con angular';
}