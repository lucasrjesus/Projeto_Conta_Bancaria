import leia from "readline-sync";
import { Colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    // *Conta 1: numero 1, agencia 123, Titular "Adriely", Tipo 1, Saldo 10000*
    //const c1: Conta = new Conta(1, 123, "Adriely", 1, 10000);
    
    // Test métodos da conta 1
    //c1.visualizar();
    //c1.sacar(1500);
    //c1.depositar(200);

    // *Conta 2: numero, agencia, Titular, Tipo, Saldo*
    //const c2: Conta = new Conta(2, 123, "João", 2, 500);
    
    // Testa métodos da conta 2
    //c2.visualizar();
    //c2.sacar(1000); // Teste de saldo insuficiente

    while (true) {

        console.log(Colors.bg.black, Colors.fg.green, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO CREFIZA COM Z                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        Colors.reset);

        console.log(Colors.fg.green, "Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.green, "\nBanco Crefiza com Z - Simplifica, vem pra Crefiza!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.whitestrong, "\n\nCriar Conta\n\n", Colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", Colors.reset);

                keyPress()
                break;
            case 3:
                console.log(Colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", Colors.reset);

                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", Colors.reset);

                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", Colors.reset);

                keyPress()
                break;
            case 6:
                console.log(Colors.fg.whitestrong, "\n\nSaque\n\n", Colors.reset);

                keyPress()
                break;
            case 7:
                console.log(Colors.fg.whitestrong, "\n\nDepósito\n\n", Colors.reset);

                keyPress()
                break;
            case 8:
                console.log(Colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", Colors.reset);

                keyPress()
                break;
            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);

                keyPress()
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Lucas Ribeiro de Jesus - lrj.lucasribeiro@gmail.com");
    console.log("github.com/lucasrjesus");
    console.log("*****************************************************");
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    leia.prompt();
}

main();
