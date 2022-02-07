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
    let calculo = answers.calculo
    let num1 = parseFloat(answers.num1)
    let num2 = parseFloat(answers.num2)

    resultadoCalculo = setTimeout (() => {
        switch(calculo){
            case 'Soma':
                soma(num1, num2)
                break
                case 'Subtração':
                subtracao(num1, num2)
                break
                case 'Multiplicação':
                multiplicacao(num1, num2)
                break
                case 'Divisão':
                divisao(num1, num2)
                break
        }
    })
}).catch((err) => console.)