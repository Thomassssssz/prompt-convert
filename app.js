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