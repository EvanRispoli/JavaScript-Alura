import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();


const cliente2 = new Cliente();


const contaCorrenteEvan = new ContaCorrente(1001, cliente1);
contaCorrenteEvan.depositar(500);
contaCorrenteEvan.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteEvan.tranferir(valor, conta2);

console.log(contaCorrenteEvan);

