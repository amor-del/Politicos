import { Esfera } from "../enums/Esfera";
import { Poder } from "../enums/Poder";

export abstract class Politico {
    private nome: string;
    private partido: string;
    private esfera: Esfera;
    private poder: Poder;
    private localTrabalho: string;
    private enderecoTrabalho: string;
    private remuneracao: number;
    private projetos: string[];

    constructor(
        nome: string,
        partido: string,
        esfera: Esfera,
        poder: Poder,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number
    ) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = [];
    }

    public getNome(): string {
        return this.nome;
    }

    public getPartido(): string {
        return this.partido;
    }

    public getEsfera(): Esfera {
        return this.esfera;
    }

    public getPoder(): Poder {
        return this.poder;
    }

    public getLocalTrabalho(): string {
        return this.localTrabalho;
    }

    public getEnderecoTrabalho(): string {
        return this.enderecoTrabalho;
    }

    public getRemuneracao(): number {
        return this.remuneracao;
    }

    public adicionarProjeto(titulo: string): void {
        this.projetos.push(titulo);
    }

    public getProjetos(): string[] {
        return this.projetos;
    }

    public abstract executarMandato(): string;
}