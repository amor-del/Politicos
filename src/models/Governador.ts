import { Politico } from "./Politico";
import { Esfera } from "../enums/Esfera";
import { Poder } from "../enums/Poder";

export class Governador extends Politico {

    private estado: string;
    private quantidadeSecretarios: number;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        quantidadeSecretarios: number
    ) {
        super(
            nome,
            partido,
            Esfera.ESTADUAL,
            Poder.EXECUTIVO,
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.estado = estado;
        this.quantidadeSecretarios = quantidadeSecretarios;
    }

    public getEstado(): string {
        return this.estado;
    }

    public getQuantidadeSecretarios(): number {
        return this.quantidadeSecretarios;
    }

    public executarMandato(): string {
        return "Sancionar e vetar leis estaduais, decretar calamidade pública e enviar propostas à Assembleia Legislativa.";
    }

    public administrarPoliciaMilitar(): string {
        return "Administrar a Polícia Militar do estado.";
    }

    public administrarRodovias(): string {
        return "Administrar as rodovias estaduais.";
    }

    public administrarEducacaoSaude(): string {
        return "Administrar educação e saúde estaduais.";
    }

    public elaborarPpaLdoLoa(): string {
        return "Elaborar e enviar PPA, LDO e LOA estaduais.";
    }
}