/
let temperatura = 22;

if (temperatura < 15) {
  console.log("Muito frio");
} else if (temperatura >= 15 && temperatura <= 20) {
  console.log("Frio");
} else if (temperatura >= 21 && temperatura <= 28) {
  console.log("Agradável");
} else {
  console.log("Muito quente");
}


let nota = 8.5;

if (nota >= 9) {
  console.log("Conceito A");
} else if (nota >= 7) {
  console.log("Conceito B");
} else if (nota >= 5) {
  console.log("Conceito C"); 
} else {
  console.log("Conceito D");
}


let dia = 3;

if (dia === 1) {
  console.log("Domingo");
} else if (dia === 2) {
  console.log("Segunda-feira");
} else if (dia === 3) { 
  console.log("Terça-feira");
} else if (dia === 4) {
  console.log("Quarta-feira");
} else if (dia === 5) {
  console.log("Quinta-feira");
} else if (dia === 6) {
  console.log("Sexta-feira");
} else if (dia === 7) {
  console.log("Sábado");
} else {
  console.log("Dia inválido");
}



let peso = 70;
let altura = 1.75;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 &&  imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obeso");
}