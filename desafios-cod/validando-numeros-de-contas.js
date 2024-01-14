/*Descrição
Agora, vamos combinar vários conceitos de lógica de programação, como manipulação de strings, operações matemáticas, controle de fluxo e expressões regulares, aplicados para o desenvolvimento de uma solução de correção para a equipe de administração de uma empresa bancária. Eles precisam de uma solução para a validação de números de contas com base em regras específicas. O programa solicitará ao usuário que insira um número de conta e verificará se ele atende aos critérios predefinidos de validação. Além disso, você pode adicionar a capacidade de informar ao usuário qual regra específica não foi cumprida caso a validação falhe.

Regras de Validação:

O número de conta deve ter exatamente 6 dígitos.

O primeiro dígito deve ser maior que zero, ou seja, estar no intervalo de 1 a 9.

A soma dos dígitos do número de conta não deve ser maior do que 30.

Entrada
O programa deve solicitar as seguintes informações:

Número de conta (uma sequência de 6 dígitos).

Saída
O programa deverá fornecer uma mensagem que informa se o número de conta é válido ou inválido, indicando se o número de conta atende às regras de validação. Caso o número de conta seja inválido, o programa deve informar qual regra específica não foi cumprida.
*/ 

// O gets() receberá um número de conta como entrada:
const numeroConta = gets();

// Verifica se o número de conta consiste em exatamente 6 dígitos usando uma expressão regular:
if (/^\d{6}$/.test(numeroConta)) {
  const numArray = numeroConta.split('').map(Number);

  // Calcula a soma dos dígitos no número de conta
  const sum = numArray.reduce((a, b) => a + b, 0);

  // Verifica se o primeiro dígito é maior que zero e a soma dos dígitos é menor ou igual a 30
  if (numArray[0] > 0 && sum <= 30) {
  // TODO: Se a condição acima for verdadeira, imprima a mensagem esperada:
    print('Numero de conta valido. ');
  } else {
  // TODO: Verifique se o numArray[0] referente ao primeiro dígito é igual a zero :
    if (numArray[0] <= 0 ) {
      // TODO: Se o primeiro dígito for igual a zero, imprima a mensagem esperada:
      print('Numero de conta invalido: O primeiro digito deve ser maior que zero. ');
    } else {
      print('Numero de conta invalido: A soma dos digitos e maior que 30.');
    }
  }
}