import rls from "readline-sync";

export function main() {
    let opcao: number;

while (true) 

console.log("***************************************************************");
console.log("                                                               ");
console.log("                       Banco Crefiza com Z                     ");
console.log("                                                               ");
console.log("***************************************************************");
console.log("                                                               ");
console.log("              1 - Criar conta                                  ");
console.log("              2 - Listar todas as Contas                       ");
console.log("              3 - Buscar Conta por Numero                      ");
console.log("              4 - Atualizar Dados da Conta                     ");
console.log("              5 - Apagar Conta                                 ");
console.log("              6 - Sacar                                        ");
console.log("              7 - Depositar                                    ");
console.log("              8 - Transferir valores entre Contas              ");
console.log("              9 - Sair                                         ");
console.log("                                                               ");
console.log("***************************************************************");
console.log("                                                               ");

console.log("Entre com a opção desejada: ");
opcao = rls.questionInt("");
 
if (opcao == 9){
    console.log("\nBanco Crefiza com Z - Simplifica, vem pra Crefiza!");
    sobre();
    process.exit(0);
}
switch (opcao){
    case 1:
        console.log("\n\n");

        break;
         case 1:
        console.log("\n\n");

        break;
         case 2:
        console.log("\n\n");

        break;
         case 3:
        console.log("\n\n");

        break;
         case 4:
        console.log("\n\n");

        break;
         case 5:
        console.log("\n\n");

        break;
         case 6:
        console.log("\n\n");

        break;
         case 7:
        console.log("\n\n");

        break;
         case 8:
        console.log("\n\n");

        break;
        default:
            console.log("\nOpcão Inválida!\n");

            break;
}
}


export function sobre(): void {
    console.log("\n****************************************");
    console.log("Projeto desenvolvido por: Lucas Jesus");
    console.log("Generation Brazsil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("******************************************");
} 

main();

