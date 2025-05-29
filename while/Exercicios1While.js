let Usuario = prompt("Digite seu nome de usuário:")

while (Usuario === "") {
    console.log("Nome não pode estar vazio.")
    Usuario = prompt("Digite seu nome de usuário:")
}
console.log("Olá, " + Usuario + "!")


let senha = prompt("digite a senha: ")

while (senha != 6789) {
    console.log("senha invalida")
    senha = prompt("Digite a senha: ")
}
console.log("Bem-vindo!")


let senha1 = prompt("digite a senha: ")
let senha2 = prompt("confirme a senha: ")

while (senha1 !== senha2) {
    console.log("senha invalida");
    senha2 = prompt("confirme a senha: ")
}
console.log("Bem-vindo!")


let usuario,senha

usuario = prompt("Digite o usuário: ")
senha = prompt("Digite a senha: ")

while (usuario !== "admin" || senha !=1234) {
      usuario = prompt("Digite o usuário: ")
        senha = prompt("Digite a senha: ")
    }
console.log("Bem-vindo!")



usuario = prompt("Digite o usuário: ")
senha = prompt("Digite a senha: ")

while (usuario !== "admin" || senha !=1234) {
    console.log("Usuário ou senha incorretos")
      usuario = prompt("Digite o usuário: ")
        senha = prompt("Digite a senha: ")
    }
console.log("Bem-vindo!")






let usuario,senha
let tentativas = 0
let tentativas3 = 3

usuario = prompt("Digite o usuário: ")
senha = prompt("Digite a senha: ")


while ((usuario !== "naty" || senha != 1245) && tentativas < tentativas3) {
    console.log("Usuário ou senha incorretos")
    tentativas++;
    if (tentativas < tentativas3) {
        usuario = prompt("Digite o usuário: ")
        senha = prompt("Digite a senha: ")
    }
}

if (usuario === "naty" && senha == 1245) {
    console.log("Bem-vindo!")
} else {
    console.log("Número de tentativas excedido. Acesso bloqueado.")
}

let usuario,senha
let loginuser,loginsenha

usuario = prompt("crie o usuário: ")
senha = prompt("crie a senha: ")

loginuser = prompt("Digite o usuário: ")
loginsenha = prompt("Digite a senha: ")

while (usuario !== loginuser || senha != loginsenha) {
    console.log("Usuário ou senha incorretos")
      usuario = prompt("Digite o usuário: ")
        senha = prompt("Digite a senha: ")
    }
console.log("Bem-vindo!")









let loginuser,loginsenha


loginuser = prompt("Digite o usuário: ")
loginsenha = prompt("Digite a senha: ")

let nome = prompt("Digite seu usuário:")
let senha = prompt("Digite sua senha:")

while (nome !== loginuser || senha !== loginsenha) {
    console.log("Usuário ou senha incorretos")
    
    let esqueci = prompt("Esqueceu a senha? (sim/não)")

    if (esqueci === "sim") {
        console.log("Sua senha é:", loginsenha)
    }

    nome = prompt("Digite seu nome de usuário:");
    senha = prompt("Digite sua senha:")
}

console.log("Login realizado com sucesso!")






let usuario = prompt("Cadastre seu usuário:")
let senha = prompt("Cadastre sua senha:")


let login = prompt("Digite seu usuário:")
let senhaLogin = prompt("Digite sua senha:")

while (login !== usuario || senhaLogin !== senha) {
    console.log("Usuário ou senha incorretos.")
    login = prompt("Digite seu usuário:")
    senhaLogin = prompt("Digite sua senha:")
}

console.log("Você está logado!")


let comando = prompt("Digite 'sair' para fazer logout:")

while (comando !== "sair") {
    comando = prompt("Você ainda está logado. Digite 'sair' para sair:")
}

console.log("Logout efetuado com sucesso!")