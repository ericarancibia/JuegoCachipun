let num_jugadas = Number(prompt("Indique cuantas veces quiere jugar contra el PC:"));
let hist_resultados = "";

function turno_pc() {
    let num_random = Math.floor(Math.random() * 3);
    let pc = "";
    if (num_random === 0) {
        pc = "piedra";
    } else if (num_random === 1) {
        pc = "papel";
    } else {
        pc = "tijera";
    }
    return pc;
}

for (let i = 0; i < num_jugadas; i++) {
    let pc = turno_pc();
    let respuesta = prompt("Ingrese: Piedra, Papel o Tijera").toLowerCase();
    if (respuesta === "piedra" || respuesta === "papel" || respuesta === "tijera"){
        let resultado = "";

        switch (true) {
            case respuesta === pc:
                resultado = "¡Empate!";
                break;
            case respuesta === "piedra" && pc === "tijera":
            case respuesta === "papel" && pc === "piedra":
            case respuesta === "tijera" && pc === "papel":
                resultado = "¡Partida Ganada!";
                break;
            default:
                resultado = "Partida Perdida...";
                break;
        }

        alert("Su jugada: " + respuesta + "\nJugada del PC: " + pc + "\nResultado: " + resultado);
        hist_resultados = hist_resultados + resultado + "<br>";
    } 

    else {
        alert("Palabra no reconocida. Por favor, intente nuevamente recargando la página.");
    }
}

document.getElementById("num_jugadas").innerHTML = num_jugadas;
document.getElementById("hist_resultados").innerHTML = hist_resultados;