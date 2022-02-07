const inquirer = require('inquirer')
const { soma, subtracao, multiplicacao, divisao } = require('./calculadora')


inquirer.prompt([
    {
        name: 'num1',
        message: 'Digite o primeiro número:',
        type: 'number'
    },
    {
        name: 'num2',
        message: 'Digite o segundo número:',
        type: 'number'
    },
    {
        name: 'calculo',
        message: 'Qual cálculo você deseja realizar?',
        type: 'list',
        choices: ['Soma', 'Subtração', 'Multiplicação', 'Divisão']
    }
]).then((answers) => {
    let calculo = answers

})