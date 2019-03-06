var colores = [];

function getRandomInt(min, max) {
    p = (Math.random() * (max - min)/max);    
    return p;
}

function randomPalette(){
  var hue = getRandomInt(0,359);
  var l_s = getRandomInt(0,359);
  var rgb, hexaInit;
  colores = [];
  for(var i=0; i<5;i++){
    rgb = hslToRgb(hue,l_s,l_s);
    hexaInit = Number(Math.floor(rgb[0])).toString(16);
    hexaInit = hexaInit.length < 3 ? '0'+hexaInit : hexaInit; 
    colores.push(hexaInit);
    hue = hue + 0.25;
    hue = hue > 1 ? hue -1 : hue; 
  }

  generarColores();
  generateRules();
}

function generateRules(){
  var texto =".website-background{ color: "+colores[0]+";} \n"+
             ".element-text{ color: "+colores[1]+";}\n"+
             ".element-border{ border-color: "+colores[2]+";}\n"+
             ".element-background{ background-color: "+colores[3]+";}\n"+
             ".header{ color: "+colores[4]+";}\n";
 $("#css-rules").val(texto);
}

function generarColores(){ 
  for(var i=0; i<colores.length;i++){
    $("#color"+(i+1)).css("background-color", '#'+colores[i]);
  }
}

function limpiar(){
  colores = ["#FFF","#FFF","#FFF","#FFF","#FFF"];
  generarColores();
  generateRules();
}


