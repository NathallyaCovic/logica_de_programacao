https://drive.google.com/file/d/1wgo8tNCQ-zvdGVentZ7HYfzljPrveUFj/view?usp=classroom_web&authuser=0


console.log("Selecione suas informa��es:")
let nome = prompt("Digite seu nome:")
let tipoCartao = prompt("*S� aceitamos cart�o*. Selecione a forma de pagamento:")

let cartaoValidos = [
  "debito", "credito", "D�bito", "Cr�dito",
  "Debito", "Credito", "d�bito", "cr�dito"
]

while (!cartaoValidos.includes(tipoCartao)) {
  tipoCartao = prompt("Forma de pagamento inv�lida. Selecione outra forma de pagamento (d�bito ou cr�dito):")
}

let dadosCartao = Number(prompt("Digite o n�mero do cart�o:"))

function validarNumero(numero) {
  return numero >= 1000000000000000 && numero <= 9999999999999999
}

while (!validarNumero(dadosCartao)) {
  console.log("*ERRO* N�mero do cart�o inv�lido, tente novamente.")
  dadosCartao = Number(prompt("Digite o n�mero do cart�o novamente:"))
}

let escolha = prompt("Qual � o seu pedido?")

console.log("Cliente:", nome)
console.log("Forma de pagamento:", tipoCartao)
console.log("N�mero do cart�o:", dadosCartao)
console.log("Seu", escolha, "chegar� em 18 minutos!")
