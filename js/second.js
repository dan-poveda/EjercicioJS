/**
    * Array con las imagenes y enlaces que se iran mostrando en la web
    */
   var imagenes=new Array(
       ['img/parentesis.jpg'],
       ['img/menos.jpg'],
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

   /**
    * Función que se ejecuta una vez cargada la página
    */
   function  onload()
   {
       // Cargamos una imagen aleatoria
       rotarImagenes();

       // Indicamos que cada 5 segundos cambie la imagen
       setInterval(rotarImagenes,3000);
   }
