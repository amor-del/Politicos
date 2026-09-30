import { Politico } from "./Politico";
import { Esfera } from "../enums/Esfera";
import { Poder } from "../enums/Poder";

export class DeputadoEstadual extends Politico {

    private estado: string;
    private comissoes: string[];

    constructor(
        nome: string,
        partido: string,
        estado: string,
        comissoes: string[],
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number
    ) {
        super(
            nome,
            partido,
            Esfera.ESTADUAL,
            Poder.LEGISLATIVO,
            localTrabalho,
            enderecoTrabalho,
            remuneracao
        );

        this.estado = estado;
        this.comissoes = comissoes;
    }

    public getEstado(): string {
        return this.estado;
    }

    public getComissoes(): string[] {
        return this.comissoes;
    }

    public executarMandato(): string {
        return "Representar o estado na Assembleia Legislativa e participar da elaboração das leis estaduais.";
    }

    public votarPpaLdoLoa(): string {
        return "Votar PPA, LDO e LOA estaduais.";
    }

    public proporEmendaConstitucionalEstadual(): string {
        return "Propor emendas à Constituição Estadual.";
    }

    public criarCpiEstadual(): string {
        return "Criar ou participar de Comissão Parlamentar de Inquérito estadual.";
    }
}