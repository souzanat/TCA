class filme {
    constructor (nome, duracao, nota, ano, data, genero) {
        this.nome = nome;
        this.duracao = duracao;
        this.nota = nota;
        this.ano = ano;
        this.data = data;
        this.genero = genero
 
    }


}


        function adicionarFilme(nomeFilme, duracaoFilme, notaFilme, anoFilme, dataFilme, generoFilme){


            alert("para cadastrar um filme, digite as seguintes informações:");
       
            nomeFilme = prompt("qual o nome do filme?");
            duracaoFilme = Number(prompt("qual a duração do filme?"));
            notaFilme = Number(prompt("qual a nota do filme? (De 1 a 5)"));
            anoFilme = Number(prompt("qual o ano de lançamento do filme?"));
            dataFilme = prompt("qual a data que você assistiu o filme? (modelo: dd/mm/aaaa)");
            generoFilme = prompt("qual o gênero do filme?");


            if(duracaoFilme < 0 || notaFilme < 0 || notaFilme > 5 || anoFilme < 0 || nomeFilme == null || duracaoFilme == null || notaFilme == null || anoFilme == null || dataFilme == null || generoFilme == null || nomeFilme == "" || duracaoFilme == "" || notaFilme == "" || anoFilme == "" || dataFilme == "" || generoFilme == ""){
                alert("alguma informação foi digitada de forma inválida, tente novamente!")
                return;    
            }


            let filmeAdicionado = new filme(
                nomeFilme,
                duracaoFilme,
                notaFilme,
                anoFilme,
                dataFilme,
                generoFilme
            );


            filmes.push(filmeAdicionado);
           
            catalogo.push(filmeAdicionado.nome);
            //catalogo tb
       
            alert("Filme adicionado!")
        }




        function pesquisarFilme(pesquisa){


            pesquisa = prompt("digite o filme que você quer pesquisar:");


            let encontrado = false;


            if(pesquisa == null || pesquisa == ""){
                alert("pesquisa inválida")
                return;
            }
       
            for(let i = 0; i < filmes.length; i++){
                if(filmes[i].nome.toLowerCase() == pesquisa.toLowerCase()){
                    alert(`filme encontrado! \n nome: ${filmes[i].nome} \n duração: ${filmes[i].duracao} \n nota: ${filmes[i].nota} \n ano de lançamento: ${filmes[i].ano} \n data que foi assistido: ${filmes[i].data} \n gênero: ${filmes[i].genero}`)


                    encontrado = true
                }


            }


            if(encontrado === false){
                alert(`filme não encontrado, faça o cadastro!`)
                return;
            }
       
        }
       
        function Watchlist(nomeWatchlist, duracaoWatchlist, anoWatchlist, generoWatchlist){
            alert("escolha um filme para adicionar a sua watchlist!")


            nomeWatchlist = prompt("qual o nome do filme?");
            duracaoWatchlist = Number(prompt("qual a duração do filme?"));
            anoWatchlist = Number(prompt("qual o ano de lançamento do filme?"));
            generoWatchlist = prompt("qual o gênero do filme?");


            if(duracaoWatchlist < 0 || anoWatchlist < 0 || nomeWatchlist == null || duracaoWatchlist == null || anoWatchlist == null || generoWatchlist == null || nomeWatchlist == "" || duracaoWatchlist == "" || anoWatchlist == "" || generoWatchlist == ""){
                alert("alguma informação foi digitada de forma inválida, tente novamente!")
                return;
            }


            let FilmeWatchlist = new filme(
                nomeWatchlist,
                duracaoWatchlist,
                anoWatchlist,
                generoWatchlist
            );


            alert(`o filme "${nomeWatchlist}" foi adicionado a sua watchlist!`)
        }


        function listarFilmes(){
            if(filmes.length === 0){
                alert("não há filmes cadastrados!")
                return;
            }


            let lista = "filmes cadastrados:\n";


            for(let i = 0; i < filmes.length; i++){
                lista += `\n${i + 1} - ${filmes[i].nome} \n duração: ${filmes[i].duracao} \n nota: ${filmes[i].nota} \n ano de lançamento: ${filmes[i].ano} \n data que foi assistido: ${filmes[i].data} \n gênero: ${filmes[i].genero}\n`;
            }


            alert(lista);
        }


let filmes = [


new filme ('o show de truman', 103, 4.5, 1998, '02/05/2000', 'drama'),
new filme ('backrooms', 111, 3, 2026, '29/05/2026', 'terror'),
new filme ('anora', 139, 4, 2024, '03/01/2024', 'drama'),
new filme ('a espera de um milagre', 189, 5, 1999, '12/08/2019', 'drama'),
new filme ('divergente', 140, 1.5, 2014, '21/07/2017', 'ação'),
new filme ('como se fosse a primeira vez', 99, 5, 2004, '02/05/2010', 'romance'),
new filme ('minecraft', 101, 1, 2025, '08/04/2025', 'aventura'),
new filme ('o diário de uma paixão', 123, 4.5, 2004, '19/04/2026', 'romance'),
new filme ('adoráveis mulheres', 135, 4, 2019, '22/03/2022', 'drama'),
new filme ('amiga do inimigo', 70, 2.5, 2020, '21/07/2021', 'comédia'),
new filme ('bird box', 124, 3.5, 2018, '19/08/2018', 'suspense'),
new filme ('tropa de elite', 115, 4.5, 2007, '21/10/2026', 'ação'),
new filme ('psicose', 109, 5, 1960, '18/08/2025', 'terror'),
new filme ('evil dead rise', 96, 3, 2023, '21/02/2025', 'terror'),
new filme ('corra', 103, 4.5, 2017, '02/05/2026', 'suspense'),
new filme ('pearl', 102, 4.5, 2022, '05/10/2023', 'terror'),
new filme ('rua do medo: 1994', 108, 2, 2021, '20/06/2022', 'terror'),
new filme ('a bela adormecida', 75, 4, 1959, '12/06/2001', 'romance'),


];


let catalogo = ['o show de truman','backrooms', 'anora', 'a espera de um milagre', 'divergente', 'como se fosse a primeira vez', 'minecraft', 'o diário de uma paixão', 'adoráveis mulheres', 'amiga do inimigo', 'bird box', 'tropa de elite', 'psicose', 'evil dead rise', 'corra', 'pearl', 'rua do medo: 1994', 'a bela adormecida'];



