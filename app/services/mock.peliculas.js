System.register(["../model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var getMockPeliculasArr;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("getMockPeliculasArr", getMockPeliculasArr = [
                new pelicula_1.Pelicula(1, "Superman", "pedro", null),
                new pelicula_1.Pelicula(2, "BAtman", "juan", 2012),
                new pelicula_1.Pelicula(3, "Robin", "judas", 2013),
                new pelicula_1.Pelicula(4, "Wason", "pablo", 2014),
                new pelicula_1.Pelicula(5, "Marmol", "pedro", 2010),
                new pelicula_1.Pelicula(6, "Spiderman", "tono", null)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map