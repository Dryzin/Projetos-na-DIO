//console.log("Hello Word!")

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]); 
        } else{
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log("Números pares: ",evenNums);
}

let array = [1, 2, 3, 4, 8]

returnEvenValues(array);