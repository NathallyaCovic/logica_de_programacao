https://www.programiz.com/online-compiler/58tvIogH0DmZa 


let respostaIncorreta = 0
let respostaCorreta = 0

// Pergunta 1 resposta A
console.log("Qual é a capital da Tanzânia?")
console.log("A - Dodoma")
console.log("B - Luanda")
console.log("C - Kingston")
console.log("D - Caton")

let pergunta1 = prompt("Digite a resposta: ")
switch (true){
    case pergunta1 === "Dodoma" || pergunta1 === "A" || pergunta1 === "a" || pergunta1.toLowerCase() === "dodoma":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é Dodoma")
        respostaIncorreta++
}

// Pergunta 7 RESPOSTA C
console.log("Qual planeta tem a maior quantidade de satélites naturais?")
console.log("A - Urano")
console.log("B - Terra")
console.log("C - Júpiter")
console.log("D - Saturno")

let pergunta7 = prompt("Digite a resposta: ")
switch (true){
    case pergunta7 === "Júpiter" || pergunta7 === "C" || pergunta7 === "c" || pergunta7.toLowerCase() === "júpiter":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é Júpiter")
        respostaIncorreta++
}

// Pergunta 2 resposta A
console.log("Qual é o maior oceano do mundo?")
console.log("A - Pacífico")
console.log("B - Índico")
console.log("C - Atlântico")
console.log("D - Glacial")

let pergunta2 = prompt("Digite a resposta: ")
switch (true){
    case pergunta2.toLowerCase() === "pacífico" || pergunta2 === "A" || pergunta2 === "a":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é Pacífico")
        respostaIncorreta++
}

// Pergunta 3 RESPOSTA D
console.log("Qual é a fórmula química da água?")
console.log("A - H30")
console.log("B - HnO3")
console.log("C - Co2")
console.log("D - H2O")

let pergunta3 = prompt("Digite a resposta: ")
switch (true){
    case pergunta3 === "H2O" || pergunta3 === "D" || pergunta3 === "d" || pergunta3.toLowerCase() === "h2o":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é H2O")
        respostaIncorreta++
}

// Pergunta 5 RESPOSTA B
console.log("Em que ano aconteceu a Revolução Francesa?")
console.log("A - 1772")
console.log("B - 1789")
console.log("C - 1784")
console.log("D - 1790")

let pergunta5 = prompt("Digite a resposta: ")
switch (true){
    case pergunta5 === "1789" || pergunta5 === "B" || pergunta5 === "b":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é 1789")
        respostaIncorreta++
}

// Pergunta 6 RESPOSTA C
console.log("Qual é o país mais populoso do mundo, hoje?")
console.log("A - EUA")
console.log("B - China")
console.log("C - Índia")
console.log("D - Brasil")

let pergunta6 = prompt("Digite a resposta: ")
switch (true){
    case pergunta6 === "Índia" || pergunta6 === "C" || pergunta6 === "c" || pergunta6.toLowerCase() === "índia":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é Índia")
        respostaIncorreta++
}

// Pergunta 8 RESPOSTA B
console.log("Qual a forma geométrica com três lados e três vértices?")
console.log("A - Quadrado")
console.log("B - Triângulo")
console.log("C - Prisma")
console.log("D - Pirâmide")

let pergunta8 = prompt("Digite a resposta: ")
switch (true){
    case pergunta8 === "Triângulo" || pergunta8 === "B" || pergunta8 === "b" || pergunta8.toLowerCase() === "triângulo":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é Triângulo")
        respostaIncorreta++
}

// Pergunta 9 RESPOSTA C
console.log("A estrela solitária na bandeira do Brasil representa qual estado?")
console.log("A - Bahia")
console.log("B - Brasília")
console.log("C - Pará")
console.log("D - São Paulo")

let pergunta9 = prompt("Digite a resposta: ")
switch (true){
    case pergunta9 === "Pará" || pergunta9 === "C" || pergunta9 === "c" || pergunta9.toLowerCase() === "pará":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é Pará")
        respostaIncorreta++
}

// Pergunta 0 RESPOSTA A
console.log("4 + 4! ?")
console.log("A - 28")
console.log("B - 16")
console.log("C - 206")
console.log("D - 2")

let pergunta0 = prompt("Digite a resposta: ")
switch (true){
    case pergunta0 === "28" || pergunta0 === "A" || pergunta0 === "a":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é 28")
        respostaIncorreta++
}

// Pergunta 4 RESPOSTA D
console.log("Qual continente está a Jamaica?")
console.log("A - Oceânico")
console.log("B - Europeu")
console.log("C - Africano")
console.log("D - Americano")

let pergunta4 = prompt("Digite a resposta: ")
switch (true){
    case pergunta4 === "Americano" || pergunta4 === "D" || pergunta4 === "d" || pergunta4.toLowerCase() === "americano":
        console.log("Alternativa correta")
        respostaCorreta++
        break
    default:
        console.log("Resposta incorreta, alternativa correta é Americano")
        respostaIncorreta++
}

// Exibir o resultado
console.log("Resultado do Quiz:")
console.log("Respostas corretas: " + respostaCorreta)
console.log("Respostas incorretas: " + respostaIncorreta)

switch (true) {
    case respostaCorreta >= 9 && respostaIncorreta <= 1:
        console.log("Parabéns, você passou, um gênio de conhecimentos gerais!")
        break
    case respostaCorreta >= 7:
        console.log("Parabéns, você passou!")
        break
    default:
        console.log("Não passou, mas pode continuar estudando!")
        break
}

