import { Politico } from "./Politico";
import { Esfera } from "../enums/Esfera";
import { Poder } from "../enums/Poder";

export class DeputadoFederal extends Politico {

    private estado: string;
    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        bancada: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number
    ) {
        super(
            nome,
            partido,
            Esfera.FEDERAL,
            Poder.LEGISLATIVO,
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.estado = estado;
        this.bancada = bancada;
    }

    public getEstado(): string {
        return this.estado;
    }

    public getBancada(): string {
        return this.bancada;
    }

    public executarMandato(): string {
        return "Representar o estado na Câmara dos Deputados e participar da elaboração das leis federais.";
    }

    public votarPecsFederais(): string {
        return "Votar propostas de emenda à Constituição Federal.";
    }

    public criarCpiNacional(): string {
        return "Participar da criação de Comissão Parlamentar de Inquérito nacional.";
    }

    public votarPpaLdoLoa(): string {
        return "Votar PPA, LDO e LOA nacionais.";
    }

    public proporLeiComplementar(): string {
        return "Propor leis complementares.";
    }
}