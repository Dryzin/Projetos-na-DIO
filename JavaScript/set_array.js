/*function getAdmin(map) {
    let admins = [];
    for ([key, value] of map) {
        if(value == 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Carlos', 'Admin');
usuarios.set('Fernanda', 'User');
usuarios.set('Juliana', 'Admin');

console.log(getAdmin(usuarios));*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr)

    return [...mySet];
}

console.log(valoresUnicos(meuArray))