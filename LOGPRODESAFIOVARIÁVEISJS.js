https://drive.google.com/file/d/1wgo8tNCQ-zvdGVentZ7HYfzljPrveUFj/view?usp=classroom_web&authuser=0


console.log("Selecione suas informações:")
let nome = prompt("Digite seu nome:")
let tipoCartao = prompt("*Só aceitamos cartão*. Selecione a forma de pagamento:")

let cartaoValidos = [
  "debito", "credito", "Débito", "Crédito",
  "Debito", "Credito", "débito", "crédito"
]

while (!cartaoValidos.includes(tipoCartao)) {
  tipoCartao = prompt("Forma de pagamento inválida. Selecione outra forma de pagamento (débito ou crédito):")
}

let dadosCartao = Number(prompt("Digite o número do cartão:"))

function validarNumero(numero) {
  return numero >= 1000000000000000 && numero <= 9999999999999999
}

while (!validarNumero(dadosCartao)) {
  console.log("*ERRO* Número do cartão inválido, tente novamente.")
  dadosCartao = Number(prompt("Digite o número do cartão novamente:"))
}

let escolha = prompt("Qual é o seu pedido?")

console.log("Cliente:", nome)
console.log("Forma de pagamento:", tipoCartao)
console.log("Número do cartão:", dadosCartao)
console.log("Seu", escolha, "chegará em 18 minutos!")
