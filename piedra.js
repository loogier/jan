function aleatorio(minimo, maximo)
{
  var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo);
  return numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);
var x;

opcionUsuario = prompt("Elige una opción:\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

console.log(opcionUsuario);

document.getElementById("texto1").innerHTML = opciones[opcionUsuario];
document.getElementById("texto2").innerHTML = opciones[opcionMaquina];


if(opcionUsuario == piedra){

  if(opcionMaquina == piedra)
    {
      document.getElementById("resultado").innerHTML = "Empate!";
      
    }
    else if(opcionMaquina == papel)
      {
      document.getElementById("resultado").innerHTML = "Gana el oponente";
    }
    else if(opcionMaquina == tijera)
      {
      document.getElementById("resultado").innerHTML = "Ganaste";
    }
}


else if(opcionUsuario == papel){

  if(opcionMaquina == piedra)
    {
      document.getElementById("resultado").innerHTML = "Ganaste";
    }
    else if(opcionMaquina == papel)
      {
      document.getElementById("resultado").innerHTML = "Empate!";
    }
    else if(opcionMaquina == tijera)
      {
      document.getElementById("resultado").innerHTML = "Gana el oonente!";
    }
}


else if(opcionUsuario == tijera){

  if(opcionMaquina == piedra)
    {
      document.getElementById("resultado").innerHTML = "Gana el oponente!";
    }
    else if(opcionMaquina == papel)
      {
      document.getElementById("resultado").innerHTML = "Ganaste";
    }
    else if(opcionMaquina == tijera)
      {
     document.getElementById("resultado").innerHTML = "Empate!";
    }
}
else{
  alert("Elije un opción");
}
