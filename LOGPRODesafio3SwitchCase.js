let perguntaterminal = prompt("Você está usando terminal:\n1 - Linux\n2 - Windows\nselecione sua resposta: ")

if (perguntaterminal === "linux" || perguntaterminal === "1") {
    let perguntalinux = prompt("Digite um comando Linux que você quer saber:")

    switch (perguntalinux) {
        case "pwd":
            console.log("• pwd – Exibe o diretório atual.\nExemplo: pwd")
            break
        case "ls":
            console.log("• ls – Lista arquivos e diretórios no local atual.\nExemplo: ls")
            break
        case "cd":
            console.log("• cd – Acessa um diretório.\nExemplo: cd Documentos")
            break
        case "cd ..":
            console.log("• cd .. – Volta um diretório.\nExemplo: cd ..")
            break
        case "cd /":
            console.log("• cd / – Vai para a raiz do sistema.\nExemplo: cd /")
            break
        case "cd ~":
            console.log("• cd ~ – Vai para o diretório pessoal do usuário.\nExemplo: cd ~")
            break
        case "cd -":
            console.log("• cd - – Retorna ao diretório anterior.\nExemplo: cd -")
            break
        case "mkdir":
            console.log("• mkdir <nome> – Cria um novo diretório.\nExemplo: mkdir NovoDiretorio")
            break
        case "rm -r":
            console.log("• rm -r <diretório> – Remove um diretório e todo o seu conteúdo.\nExemplo: rm -r PastaAntiga")
            break
        case "rm":
            console.log("• rm <arquivo> – Remove um arquivo.\nExemplo: rm arquivo.txt")
            break
        case "echo":
            console.log("• echo 'conteúdo' > <arquivo> – Cria ou substitui um arquivo com conteúdo.\nExemplo: echo 'Olá, mundo!' > arquivo.txt")
            break
        case "cat":
            console.log("• cat <arquivo> – Exibe o conteúdo de um arquivo.\nExemplo: cat arquivo.txt")
            break
        case "clear":
            console.log("• clear – Limpa a tela.\nExemplo: clear")
            break
        case "cp":
            console.log("• cp <origem> <destino> – Copia um arquivo.\nExemplo: cp arquivo.txt /home/usuario/Documentos")
            break
        case "mv":
            console.log("• mv <origem> <destino> – Move ou renomeia um arquivo ou diretório.\nExemplo: mv arquivo.txt novo_nome.txt")
            break
        default:
            console.log("Comando não identificado.")
    }

} else if (perguntaterminal === "windows" || perguntaterminal === "2") {
    let perguntawindows = prompt("Digite um comando do Windows que você quer saber:")

    switch (perguntawindows) {
        case "dir":
            console.log("• dir – Lista arquivos e diretórios no local atual.\nExemplo: dir")
            break
        case "cd":
            console.log("• cd – Acessa um diretório.\nExemplo: cd Documentos")
            break
        case "cd ..":
            console.log("• cd .. – Volta um diretório.\nExemplo: cd ..")
            break
        case "mkdir":
        case "md":
            console.log("• mkdir <nome> – Cria um novo diretório.\nExemplo: mkdir NovoDiretorio")
            break
        case "rmdir":
        case "rd":
            console.log("• rmdir <diretório> – Remove um diretório vazio.\nExemplo: rmdir Antigo")
            break
        case "del":
            console.log("• del <arquivo> – Exclui arquivos.\nExemplo: del arquivo.txt")
            break
        case "echo":
            console.log("• echo 'conteúdo' > <arquivo> – Cria um arquivo com conteúdo.\nExemplo: echo Olá, mundo! > arquivo.txt")
            break
        case "cls":
            console.log("• cls – Limpa a tela.\nExemplo: cls")
            break
        case "move":
            console.log("• move <origem> <destino> – Move um arquivo.\nExemplo: move arquivo.txt C:\\Destino")
            break
        case "exit":
            console.log("• exit – Fecha o terminal.\nExemplo: exit")
            break
        default:
            console.log("Comando não identificado.")
    }

} else {
    console.log("Resposta inválida. Tente novamente.")
}
