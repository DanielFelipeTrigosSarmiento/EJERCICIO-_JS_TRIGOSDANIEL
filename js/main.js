function sonDelimitadoresEquilibrados(expresion) {
    const delimitadores = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const pila = [];

    for (let char of expresion) {
        if (delimitadores[char]) {
            pila.push(char);
        } else if (Object.values(delimitadores).includes(char)) { 
            if (pila.length === 0 || delimitadores[pila.pop()] !== char) {
                return false;
            }
        }
    }

    return pila.length === 0;
}
function main() {
    while (true) {
        const expresion = prompt("Ingrese una expresión para verificar o 'salir' para terminar:");
        if (expresion === null || expresion.toLowerCase() === 'salir') {
            break;
        }

        if (sonDelimitadoresEquilibrados(expresion)) {
            console.log("La expresión está equilibrada.");
        } else {
            console.log("La expresión no está equilibrada.");
        }
    }
}

main();
