// Variables
let maximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * maximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 6;
while (numeroUsuario != numeroSecreto ) {
  numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${maximoPosible} por favor`));
  
  console.log(numeroUsuario);
  /**
   * Este código realiza
   * la comparación
   */
  if (numeroUsuario === numeroSecreto) {
    // acertamos fue verdadera la condición
    alert(`Acertaste el numero es ${numeroUsuario}, y lo hiciste en ${veces} ${intentos==1? "vez" : "veces"}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es Menor")
    } else {
      alert("El numero secreto es Mayor")
    }
    intentos++;
    if (intentos == 3) {
      alert(`Llegaste al número máximo de ${intentos} intentos!!!`)
      break;
    }
    // La condicion no se cumplio
    // alert("Lo siento no acertaste el numero");
  }
}
