class VideoGame {
    nome: string;
    genero: string;
    numeroJogadores: number;
    plataforma: [string];
    preco: number;

    constructor(nome: string, genero: string, numeroJogadores: number, plataforma: string, preco: number) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = [plataforma];  
        this.preco = preco;
    }

    exibirDetalhes(): void {
        console.log("Detalhes do Jogo:");
        console.log("Nome:", this.nome);
        console.log("Gênero:", this.genero);
        console.log("Número de Jogadores:", this.numeroJogadores);
        console.log("Plataformas:", this.plataforma.join(", "));
        console.log("Preço: $" + this.preco);
    }

    aplicarDesconto(percentual: number): void {
        this.preco -= (this.preco * percentual) / 100;
        
    }

    adicionarPlataforma(novaPlataforma: string): void {
        this.plataforma.push(novaPlataforma);
    
    }

    estimarTempoJogo(): string {
        switch (this.genero) {
            case "Ação":
                return "Cerca de 12 horas";
            case "Aventura":
                return "Cerca de 20 horas";
            case "Esportes":
                return "Indeterminado";
            case "Estratégia":
                return "Cerca de 40 horas";
            default:
                return "Gênero desconhecido";
        }
    }
}

const meuJogo = new VideoGame("Meu Jogo", "Ação", 1, "PC", 60.0);
meuJogo.exibirDetalhes();
meuJogo.aplicarDesconto(10);
console.log("Novo preço: $" + meuJogo.preco);
meuJogo.adicionarPlataforma("PlayStation");
console.log("Plataformas: " + meuJogo.plataforma.join(", "));
console.log("Tempo estimado para completar o jogo: " + meuJogo.estimarTempoJogo());
