const dolar = 1300;
const history = [];

function convertCurrency() {
    const ars = parseFloat(prompt("Ingrese la cantidad en ARS:"));
    
    if (isNaN(ars)) {
        alert("Ingrese un número válido");
        return;
    }
    const usd = ars/dolar;
    alert(`${ars} ARS = ${usd.toFixed(2)} USD`);


    history.push({
        tipo:"divisa",
        fecha: new Date().toLocaleTimeString(),
        entrada: ars,
        salida: usd.toFixed(2)
    });
}
function menu() {
    let opcion;
    
    do {
        opcion = prompt(
        `Elija una opcion:
            1. Divisa (ARS -> USD)
            2. Salir`
        );
        switch (opcion) {
            case "1": convertCurrency(); break;
            case "2": 
                console.log("Historial completo:", history); 
                break;
            default: alert("Opción no válida");
        }
    }while(opcion !== "2");
}menu();
