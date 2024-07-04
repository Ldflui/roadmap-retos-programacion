/*
EJERCICIO:
- Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
    Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
    (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
- Utilizando las operaciones con operadores que tú quieras, crea ejemplos
    que representen todos los tipos de estructuras de control que existan
    en tu lenguaje:
    Condicionales, iterativas, excepciones...
- Debes hacer print por consola del resultado de todos los ejemplos.

DIFICULTAD EXTRA (opcional):
    Crea un programa que imprima por consola todos los números comprendidos
    entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.

    Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

//OPERADORES:
/*
-Operadores de ASIGNACIÓN:
Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. 
El operador de asignación simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = y asigna el valor de y a x.
También hay operadores de asignación compuestos que son una abreviatura de las operaciones siguientes.
*/
console.log("OPERADORES ARITMETICOS:");

let numb1 = 3;
let numb2 = 4;

let res;
let booleanResult;
let asignationResult;

const opA = [    
    {op: 'suma', sb: '+'},
    {op: 'resta', sb: '-'},
    {op: 'multiplicación', sb: '*'},
    {op: 'divisición', sb: '/'},
    {op: 'exponenciación', sb: '**'},
    {op: 'residuo', sb: '%'},
]

for (const op of opA){
    res = eval(`${numb1} ${op.sb} ${numb2}`);
    console.log(`resultado del operador aritmetico ${op.op}: ${numb1} ${op.sb} ${numb2} = ${res}`);
}

console.log("OPERADORES DE COMPARACION:");

let numb3=10;
let numb4=10;

const listadeOperdeCompa = [
    {actividad:'mayor que', signo:'>'},
    {actividad:'menor que', signo:'<'},
    {actividad:'mayor o igual que', signo:'>='},
    {actividad:'menor o igual que', signo:'<='} ,   
    {actividad:'igual', signo:'=='},
    {actividad:'igual estricto', signo:'==='},
    {actividad:'no igual', signo:'!='}    ,
    {actividad:'no igual estricto', signo:'!=='},
]

for (const actividad of listadeOperdeCompa) {
booleanResult= eval(`${numb3} ${actividad.signo} ${numb4}`)
console.log(`resultado del operador de comparación ${actividad.actividad}: ${numb3} ${actividad.signo} ${numb4} = ${booleanResult}`)
}

console.log("OPERADORES DE ASIGNACIÓN:");

let asig1=15;
let asig2=10;

const OperAsign = [
    {operador: 'Asignación', simbolo: '='},
    {operador: 'Asignación de Suma', simbolo: '+='},
    {operador: 'Asignación de Resta', simbolo: '-='},
    {operador: 'Asignación de Multi', simbolo: '*='},
    {operador: 'Asignación de División', simbolo: '/='},
    {operador: 'Asignación de Exponenciación', simbolo: '**='},
    {operador: 'Asignación de Residuo', simbolo: '%='},
];
for (operador of OperAsign) {
    let newasig1= asig1
    let resultado;

    switch (operador.simbolo) {
        case '=':
            newasig1 = asig2
            resultado = newasig1;
            console.log(`${operador.operador}: (${asig1} ${operador.simbolo} ${asig2})= ${resultado}`)
            break;
        case '+=':
            resultado = newasig1 += asig2;
            console.log(`${operador.operador}: (${asig1} ${operador.simbolo} ${asig2})= ${resultado}`)
            break;
        case '-=':
            resultado = newasig1 -= asig2;
            console.log(`${operador.operador}: (${asig1} ${operador.simbolo} ${asig2})= ${resultado}`)
            break;
        case '*=':
            resultado = newasig1 *= asig2;
            console.log(`${operador.operador}: (${asig1} ${operador.simbolo} ${asig2})= ${resultado}`)
            break;
        case '/=':
            resultado = newasig1 /= asig2;
            console.log(`${operador.operador}: (${asig1} ${operador.simbolo} ${asig2})= ${resultado}`)
            break;
        case '**=':
            resultado = newasig1 **= asig2;
            console.log(`${operador.operador}: (${asig1} ${operador.simbolo} ${asig2})= ${resultado}`)
            break;
        case '%=':
            resultado = newasig1 %= asig2;
            console.log(`${operador.operador}: (${asig1} ${operador.simbolo} ${asig2})= ${resultado}`)
            break;
        default:
            resultado = 'operador desconocido';
    }
}

let asign1 = 20;
let asign2 = 40;

console.log('')
console.log('OPERADORES DE ASIGNACIÓN:')
// Operadores de asignación
const operadoresAsignacion = [
    { operador: 'Asignacion', simbolo: '=' },
    { operador: 'Asignacion de adicion', simbolo: '+=' },
    { operador: 'Asignacion de resta', simbolo: '-=' },
    { operador: 'Asignacion de multiplicacion', simbolo: '*=' },
    { operador: 'Asignacion de division', simbolo: '/=' },
    { operador: 'Asignacion de exponenciacion', simbolo: '**=' },
    { operador: 'Asignacion de residuo', simbolo: '%=' },
];

for (const operador of operadoresAsignacion) {
    let newAsign1 = asign1
    let result;

    switch (operador.simbolo) {
        case '=':
            newAsign1 = asign2;
            result = newAsign1
            console.log(`${operador.operador}: (${asign1} ${operador.simbolo} ${asign2}) = ${result}`)
            break;
        case '+=':
            result = newAsign1 += asign2;
            console.log(`${operador.operador}: (${asign1} ${operador.simbolo} ${asign2}) = ${result}`)
            break;
        case '-=':
            result = newAsign1 -= asign2;
            console.log(`${operador.operador}: (${asign1} ${operador.simbolo} ${asign2}) = ${result}`)
            break;
        case '*=':
            result = newAsign1 *= asign2;
            console.log(`${operador.operador}: (${asign1} ${operador.simbolo} ${asign2}) = ${result}`)
            break;
        case '/=':
            result = newAsign1 /= asign2;
            console.log(`${operador.operador}: (${asign1} ${operador.simbolo} ${asign2}) = ${result}`)
            break;
        case '**=':
            result = newAsign1 **= asign2;
            console.log(`${operador.operador}: (${asign1} ${operador.simbolo} ${asign2}) = ${result}`)
            break;
        case '%=':
            result = newAsign1 %= asign2;
            console.log(`${operador.operador}: (${asign1} ${operador.simbolo} ${asign2}) = ${result}`)
            break;
        default:
            result = 'Operador no reconocido';
    }
}

