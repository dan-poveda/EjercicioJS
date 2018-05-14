var lista = document.getElementById("opciones").value;


var indiceSeleccionado = lista.selectedIndex;

var opcionSeleccionada = lista.options[indiceSeleccionado];


var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;
function myFunction(){


  /**
      * Array con las imagenes y enlaces que se iran mostrando en la web
      */
     var imagenes=new Array(
         ['img/software.jpg'],
         ['img/aoftware.jpg'],
         ['img/puntos.png'],
         ['img/asterisco.png']
     );

     /**
      * Funcion para cambiar la imagen y link
      */
     function rotarImagenes()
     {
         // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
         var index=Math.floor((Math.random()*imagenes.length));

         // cambiamos la imagen y la url
         document.getElementById("imagen").src=imagenes[index][0];
     }
}
