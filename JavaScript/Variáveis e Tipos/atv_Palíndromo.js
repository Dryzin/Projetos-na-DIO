//solução 1

/*function vereficaPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string
}

console.log(vereficaPalindromo("ovo"));*/

//solução 2

function vereficaPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length-1 -i]) {
            return false;
        }
    }
    return true;
}

console.log(vereficaPalindromo2("subi no onibus"));