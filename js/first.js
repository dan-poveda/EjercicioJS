

var texto = document.getElementById("texto")
function crearText() {
  for (i=0; i< 5; i++ ) {
    document.writeln( "</br>" );
    for (j=0; j< 100; j++ ) {
       document.writeln( "<i>*</i>" );
    }
  }
 }
