/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustível que está no seu carro;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;

Imprima no soncole o valor que será gasto para realizar esta viagem.

*/

const precoGasolina = 5.79;
const precoEtanol = 5.75;
let tipoCombustivel = 1; 
const kmPorLitros = 10;
const distanciaEmKm = 100;
let precoCombustivel;

if (tipoCombustivel == 1) {
  precoCombustivel = precoEtanol;
} 
else if (tipoCombustivel == 2) {
  precoCombustivel = precoGasolina;
} 
else {
  console.log("Erro");
}

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));