import { Politico } from "./Politico";
import { Esfera } from "../enums/Esfera";
import { Poder } from "../enums/Poder";

export class Presidente extends Politico {

    private quantidadeMinistros: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        quantidadeMinistros: number
    ) {

        super(
            nome,
            partido,
            Esfera.FEDERAL,
            Poder.EXECUTIVO,
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.quantidadeMinistros = quantidadeMinistros;
    }

    public getQuantidadeMinistros(): number {
        return this.quantidadeMinistros;
    }

    public executarMandato(): string {
        return "Propõe, sanciona e veta leis e edita medidas provisórias.";
    }

    public nomearMinistro(): string {
        return "Nomear ministros de Estado.";
    }

    public exonerarMinistro(): string {
        return "Exonerar ministros de Estado.";
    }

    public comandarForcasArmadas(): string {
        return "Comandar as Forças Armadas.";
    }

    public representarPais(): string {
        return "Representar o país em eventos internacionais.";
    }

    public elaborarPpaLdoLoa(): string {
        return "Elaborar e enviar PPA, LDO e LOA nacionais.";
    }
}