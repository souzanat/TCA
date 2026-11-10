class filme {
    constructor (nome, duraçao, nota, ano, data) {
        this.nome = nome;
        this.duraçao = duraçao;
        this.nota = nota;
        this.ano = ano;
        this.data = data;

        function adicionarFilme(nome, duraçao, nota, ano, data){

            alert("para cadastrar um filme, digite as seguintes informações:");
        
            let nomeFilme = prompt("qual o nome do filme?")
                this.nome.push(nomeFilme)

            let duraçaoFilme = prompt("qual a duração do filme?")
                this.duraçao.push(duraçaoFilme)

            let notaFilme = prompt("qual a nota do filme?")
                this.nota.push(notaFilme)

            let anoFilme = prompt("qual o ano de lançamento do filme?")
                this.ano.push(anoFilme)

            let dataFilme = prompt("qual a data que você assistiu o filme?")
                this.data.push(dataFilme)
        
            let filmeAdicionado = 
            
            //fazer prompt pro usuario dar as informações
        
            catalogo.push(filmeAdicionado);
        
            alert("Filme adicionado!")
        }


        function pesquisarFilme(this.nome){

            let pesquisa = prompt("digite o filme que você quer pesquisar:");
        
            for(let i = 0; i < catalogo.length; i++){
                if(catalogo[i].nome == pesquisa){
                    alert("filme encontrado!" +
                        "nome: " + catalogo[i].nome +
                        "duração: " + catalogo[i].duraçao +
                        "nota: " + catalogo[i].nota +
                        "ano: " + catalogo[i].ano +
                        "data: " + catalogo[i].data)
                }
        
                else
                alert("filme não encontrado, faça o cadastro");
        
            }
        
        }  

        }

}

let filmes = [

new filme ('o show de Truman', 103, 4,5, 1998, '02/05/2000'),
new filme ('backrooms', 111, 3, 2026, '29/05/2026'),
new filme ('anora', 139, 4, 2024, '03/01/2024'),
new filme ('a espera de um milagre', 189, 5, 1999, '12/08/2019'),
new filme ('divergente', 140, 1,5, 2014, '21/07/2017'),
new filme ('como se fosse a primeira vez', 99, 5, 2004, '02/05/2010'),
new filme ('minecraft', 101, 1, 2025, '08/04/2025',),
new filme ('o diário de uma paixão', 123, 4,5, 2004, '19/04/2026'),
new filme ('adoráveis mulheres', 135, 4, 2019, '22/03/2022'),
new filme ('amiga do inimigo', 70, 2,5, 2020, '21/07/2021'),
new filme ('bird box', 124, 3,5, 2018, '19/08/2018'),
new filme ('tropa de elite', 115, 4,5, 2007, '21/10/2026'),
new filme ('psicose', 109, 5, 1960, '18/08/2025'),
new filme ('evil dead rise', 96, 3, 2023, '21/02/2025'),
new filme ('corra', 103, 4,5, 1998, '02/05/2026'),
new filme ('pearl', 102, 4,5, 2022, '05/10/2023'),
new filme ('rua do medo: 1994', 108, 2, 2021, '20/06/2022'),
new filme ('a bela adormecida', 75, 4, 1959, '12/06/2001'),

];

let catalogo = ['o show de truman','backrooms', 'anora', 'a espera de um milagre', 'divergente', 'como se fosse a primeira vez', 'minecraft', 'o diário de uma paixão', 'adoráveis mulheres', 'amiga do inimigo', 'bird box', 'tropa de elite', 'psicose', 'evil dead rise', 'corra', 'pearl', 'rua do medo: 1994', 'a bela adormecida', ];

function adicionarFilme(nome, duraçao, nota, ano, data){

    alert("para cadastrar um filme, digite as seguintes informações:");

    let nomeFilme = prompt("qual o nome do filme?")
        this.nome.push(nomeFilme)

    let filme = 

    //fazer prompt pro usuario dar as informações

    catalogo.push(filme);

    alert("Filme adicionado!")
}

function pesquisarFilme(nome){

    let pesquisa = prompt("digite o filme que você quer pesquisar:");

    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].nome == pesquisa){
            alert("filme encontrado!" +
                "nome: " + catalogo[i].nome +
                "duração: " + catalogo[i].duraçao +
                "nota: " + catalogo[i].nota +
                "ano: " + catalogo[i].ano +
                "data: " + catalogo[i].data)
        }

        else
        alert("filme não encontrado, faça o cadastro");

    }

}  