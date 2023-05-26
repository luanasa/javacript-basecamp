/* Calcule o que deve ser pago por um produto, considerando o preço normal de 
etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequeado.

Código condição de pagamento:
1 - Á vista Débito, recebe 10% de desconto;
2 - Á vista Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta + juros de 10%;

*/

const precoEtiqueta = 100;
const formaDePagamento = 1;
let preçoFinal;

if (formaDePagamento == 1) {
  preçoFinal = (precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento == 2) {
  preçoFinal = (precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento == 3) {
  preçoFinal = precoEtiqueta;
} else {
  preçoFinal = (precoEtiqueta + (precoEtiqueta * 0.1));
}

console.log(preçoFinal);
