const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];



function alunosAprovados(arr, media){
    let aprovados = [];
    let reprovados = [];

    for (let i = 0; i < arr.length; i++){

        const {nota,nome} = arr[i];

        if (nota <= media) {
            reprovados.push(nome);
            }
        else {
            aprovados.push(nome)
            }
        }
        console.log('Alunos Aprovados:',aprovados);
        console.log('Alunos Reprovados:',reprovados);
}

alunosAprovados(alunos, 5);