function validaArry (arr, num){
    try{
        if (!arr && !num) throw new ReferenceError('Envie os parametros');

        if (typeof arr !== 'object') 
            throw new TypeError('Array precisa ser do tipo object');

        if (typeof num !== 'number') 
            throw new TypeError('Num precisa ser do tipo número');

        if(arr.length !== num) 
            throw new RangeError('Tamanho Inválido');

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um RefenceError!')
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(e.message)
        } else if(e instanceof RangeError) {
            console.log('Este erro é um RangeError!')
            console.log(e.message)
        } else {
            console.log('Tipo de Erro inesperado:' +e);
        }
    }
}

console.log(validaArry([1,2,3,4,5], 5));