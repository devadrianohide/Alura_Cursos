import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Rodrigo", 10000, 1234567899)
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Ricardo", 5000, 5558847545)
gerente.cadastrarSenha("123")


const cliente = new Cliente ("Adriano", 99944433322, "311092")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "311092")


console.log(gerenteEstaLogado)
console.log(diretorEstaLogado)
console.log(clienteEstaLogado)













/*import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";


const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente( cliente1, 1001);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100)
contaSalario.sacar(10)



//console.log(contaPoupanca);
//console.log(contaCorrenteRicardo)
console.log(contaSalario)

*/
