document.writeln( "Esto esta escrito usando JAVASCRIPT!!<P>" );
for (i=0; i<5; i++ ) {
        document.writeln("<TR>");
        for (j=0; j<5; j++ ) {
          document.writeln( "<TD>["+i+","+j+"]</TD>" );
        }
        document.writeln( "</TR>" );
      }
