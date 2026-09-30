import { Politico } from "./Politico";
import { Esfera } from "../enums/Esfera";
import { Poder } from "../enums/Poder";

export class Senador extends Politico {

    private estado: string;
    private anoEleicao: number;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        anoEleicao: number,
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
        this.anoEleicao = anoEleicao;
    }

    public getEstado(): string {
        return this.estado;
    }

    public getAnoEleicao(): number {
        return this.anoEleicao;
    }

    public executarMandato(): string {
        return "Representar o estado no Senado Federal.";
    }

    public aprovarAutoridadesAltoEscalao(): string {
        return "Aprovar autoridades de alto escalão.";
    }

    public julgarCrimesResponsabilidade(): string {
        return "Julgar crimes de responsabilidade.";
    }

    public representarInteressesEstado(): string {
        return "Representar os interesses do estado.";
    }
}