import { Presidente } from "./models/Presidente";
import { Governador } from "./models/Governador";
import { DeputadoFederal } from "./models/DeputadoFederal";
import { DeputadoEstadual } from "./models/DeputadoEstadual";
import { Senador } from "./models/Senador";
import { Politico } from "./models/Politico";

// PRESIDENTE
const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Palácio do Planalto",
    "Brasília - DF",
    46366.19,
    38
);

// GOVERNADORES
const governadorPE = new Governador(
    "Raquel Lyra",
    "PSD",
    "Pernambuco",
    "Palácio do Campo das Princesas",
    "Recife - PE",
    35000,
    20
);

const governadorSP = new Governador(
    "Tarcísio de Freitas",
    "Republicanos",
    "São Paulo",
    "Palácio dos Bandeirantes",
    "São Paulo - SP",
    35000,
    25
);

// DEPUTADOS FEDERAIS - PE
const deputadoFederalPE1 = new DeputadoFederal(
    "Clarissa Tércio",
    "PP",
    "Pernambuco",
    "Bancada de Pernambuco",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Lucas Ramos",
    "PSB",
    "Pernambuco",
    "Bancada de Pernambuco",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Fernando Monteiro",
    "PSD",
    "Pernambuco",
    "Bancada de Pernambuco",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19
);

// DEPUTADOS FEDERAIS - SP
const deputadoFederalSP1 = new DeputadoFederal(
    "Alencar Santana",
    "PT",
    "São Paulo",
    "Bancada de São Paulo",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19
);

const deputadoFederalSP2 = new DeputadoFederal(
    "Antonio Carlos Rodrigues",
    "Podemos",
    "São Paulo",
    "Bancada de São Paulo",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19
);

// DEPUTADOS ESTADUAIS - PE
const deputadoEstadualPE1 = new DeputadoEstadual(
    "Antonio Coelho",
    "União Brasil",
    "Pernambuco",
    ["Comissão de Administração Pública"],
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    33763.00
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "Junior Matuto",
    "PSB",
    "Pernambuco",
    ["Comissão de Administração Pública"],
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    33763.00
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "Waldemar Borges",
    "PSB",
    "Pernambuco",
    ["Comissão de Administração Pública"],
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    33763.00
);

// DEPUTADOS ESTADUAIS - SP
const deputadoEstadualSP1 = new DeputadoEstadual(
    "Danilo Balas",
    "PL",
    "São Paulo",
    ["Comissão de Segurança Pública"],
    "Assembleia Legislativa de São Paulo",
    "São Paulo - SP",
    33763.00
);

const deputadoEstadualSP2 = new DeputadoEstadual(
    "Alex Madureira",
    "PL",
    "São Paulo",
    ["Comissão de Educação"],
    "Assembleia Legislativa de São Paulo",
    "São Paulo - SP",
    33763.00
);

// SENADORES - PE
const senadorPE1 = new Senador(
    "Fernando Dueire",
    "MDB",
    "Pernambuco",
    2022,
    "Senado Federal",
    "Brasília - DF",
    46366.19
);

const senadorPE2 = new Senador(
    "Humberto Costa",
    "PT",
    "Pernambuco",
    2022,
    "Senado Federal",
    "Brasília - DF",
    46366.19
);

// SENADOR - SP
const senadorSP = new Senador(
    "Marcos Pontes",
    "PL",
    "São Paulo",
    2022,
    "Senado Federal",
    "Brasília - DF",
    46366.19
);

// PROJETOS
presidente.adicionarProjeto("Plano Plurianual Federal");

governadorPE.adicionarProjeto("Programa Estadual de Educação");
governadorSP.adicionarProjeto("Programa Estadual de Infraestrutura");

deputadoFederalPE1.adicionarProjeto("Projeto de Lei Federal");
deputadoFederalPE2.adicionarProjeto("Projeto de Desenvolvimento Regional");
deputadoFederalPE3.adicionarProjeto("Projeto de Infraestrutura Nacional");

deputadoFederalSP1.adicionarProjeto("Projeto de Mobilidade Urbana");
deputadoFederalSP2.adicionarProjeto("Projeto de Desenvolvimento Econômico");

deputadoEstadualPE1.adicionarProjeto("Projeto de Desenvolvimento de Pernambuco");
deputadoEstadualPE2.adicionarProjeto("Projeto de Educação Estadual");
deputadoEstadualPE3.adicionarProjeto("Projeto de Administração Pública");

deputadoEstadualSP1.adicionarProjeto("Projeto de Segurança Pública");
deputadoEstadualSP2.adicionarProjeto("Projeto de Educação de São Paulo");

senadorPE1.adicionarProjeto("Projeto de Interesse de Pernambuco");
senadorPE2.adicionarProjeto("Projeto de Desenvolvimento Social");

senadorSP.adicionarProjeto("Projeto de Interesse de São Paulo");

// POLIMORFISMO
const politicos: Politico[] = [
    presidente,
    governadorPE,
    governadorSP,
    deputadoFederalPE1,
    deputadoFederalPE2,
    deputadoFederalPE3,
    deputadoFederalSP1,
    deputadoFederalSP2,
    deputadoEstadualPE1,
    deputadoEstadualPE2,
    deputadoEstadualPE3,
    deputadoEstadualSP1,
    deputadoEstadualSP2,
    senadorPE1,
    senadorPE2,
    senadorSP
];

console.log("===== SISTEMA DE POLÍTICOS =====");
console.log("Total de políticos cadastrados:", politicos.length);
console.log("");

for (const politico of politicos) {
    console.log("--------------------------------");
    console.log("Nome:", politico.getNome());
    console.log("Partido:", politico.getPartido());
    console.log("Esfera:", politico.getEsfera());
    console.log("Poder:", politico.getPoder());
    console.log("Local de trabalho:", politico.getLocalTrabalho());
    console.log("Endereço:", politico.getEnderecoTrabalho());
    console.log("Remuneração:", politico.getRemuneracao());
    console.log("Mandato:", politico.executarMandato());
    console.log("Projetos:", politico.getProjetos().join(", "));
}
console.log("");
console.log("===== AÇÕES ESPECÍFICAS =====");

console.log("\nPRESIDENTE:");
console.log(presidente.nomearMinistro());
console.log(presidente.exonerarMinistro());
console.log(presidente.comandarForcasArmadas());
console.log(presidente.representarPais());
console.log(presidente.elaborarPpaLdoLoa());

console.log("\nGOVERNADOR DE PERNAMBUCO:");
console.log(governadorPE.administrarPoliciaMilitar());
console.log(governadorPE.administrarRodovias());
console.log(governadorPE.administrarEducacaoSaude());
console.log(governadorPE.elaborarPpaLdoLoa());

console.log("\nDEPUTADO FEDERAL:");
console.log(deputadoFederalPE1.votarPecsFederais());
console.log(deputadoFederalPE1.criarCpiNacional());
console.log(deputadoFederalPE1.votarPpaLdoLoa());
console.log(deputadoFederalPE1.proporLeiComplementar());

console.log("\nDEPUTADO ESTADUAL:");
console.log(deputadoEstadualPE1.votarPpaLdoLoa());
console.log(deputadoEstadualPE1.proporEmendaConstitucionalEstadual());
console.log(deputadoEstadualPE1.criarCpiEstadual());

console.log("\nSENADOR:");
console.log(senadorPE1.aprovarAutoridadesAltoEscalao());
console.log(senadorPE1.julgarCrimesResponsabilidade());
console.log(senadorPE1.representarInteressesEstado());