var VideoGame = /** @class */ (function () {
    function VideoGame(nome, genero, numeroJogadores, plataforma, preco) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = [plataforma];
        this.preco = preco;
    }
    VideoGame.prototype.exibirDetalhes = function () {
        console.log("Detalhes do Jogo:");
        console.log("Nome:", this.nome);
        console.log("Gênero:", this.genero);
        console.log("Número de Jogadores:", this.numeroJogadores);
        console.log("Plataformas:", this.plataforma.join(", "));
        console.log("Preço: $" + this.preco);
    };
    VideoGame.prototype.aplicarDesconto = function (percentual) {
        this.preco -= (this.preco * percentual) / 100;
    };
    VideoGame.prototype.adicionarPlataforma = function (novaPlataforma) {
        this.plataforma.push(novaPlataforma);
    };
    VideoGame.prototype.estimarTempoJogo = function () {
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
    };
    return VideoGame;
}());
var meuJogo = new VideoGame("Meu Jogo", "Ação", 1, "PC", 60.0);
meuJogo.exibirDetalhes();
meuJogo.aplicarDesconto(10);
console.log("Novo preço: $" + meuJogo.preco);
meuJogo.adicionarPlataforma("PlayStation");
console.log("Plataformas: " + meuJogo.plataforma.join(", "));
console.log("Tempo estimado para completar o jogo: " + meuJogo.estimarTempoJogo());
