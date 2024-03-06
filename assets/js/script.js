let num_jugadas = Number(prompt("Indique cuantas veces quiere jugar contra el PC:"));
let hist_resultados = "";

function turno_pc() {
    let num_random = Math.floor(Math.random() * 3);
    let pc = "";
    if (num_random === 0) {
        pc = "Piedra";
    } else if (num_random === 1) {
        pc = "Papel";
    } else {
        pc = "Tijera";
    }
    return pc;
}

for (let i = 0; i < num_jugadas; i++) {
    let pc = turno_pc();
    let respuesta = prompt("Ingrese: Piedra, Papel o Tijera");
    if (respuesta.toLowerCase() === "piedra" || respuesta.toLowerCase() === "papel" || respuesta.toLowerCase() === "tijera") {
        let resultado = "";

        switch (true) {
            case respuesta === pc:
                resultado = "¡Empate!";
                break;
            case respuesta === "Piedra" && pc === "Tijera":
            case respuesta === "Papel" && pc === "Piedra":
            case respuesta === "Tijera" && pc === "Papel":
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