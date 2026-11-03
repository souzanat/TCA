class filme {
    constructor (nome, duraçao, nota, ano, data) {
        this.nome = nome;
        this.duraçao = duraçao;
        this.nota = nota;
        this.ano = ano;
        this.data = data;
    }
}

filmes = [

new filme ('o show de Truman', '103', '4,5', '1998', '02/05'),
new filme ('backrooms', '111', '3', '2026', '29/05'),
new filme ('anora', '139', '4', '2024', '03/01'),
new filme ('a espera de um milagre', '189', '5', '1999', '12/08'),
new filme ('divergente', '140', '1,5', '2014', '21/07', 'não'),
new filme ('como se fosse a primeira vez', '99', '5', '2004', '02/05'),
new filme ('minecraft', '101', '1', '2025', '08/04',),
new filme ('o diário de uma paixão', '123', '4,5', '2004', '19/04'),
new filme ('adoráveis mulheres', '135', '4', '2019', '22/03'),
new filme ('amiga do inimigo', '70', '2,5', '2020', '21/07'),
new filme ('bird box', '124', '3,5', '2018', '19/08'),
new filme ('tropa de elite', '115', '4,5', '2007', '21/10'),
new filme ('psicose', '109', '5', '1960', '18/08'),
new filme ('evil dead rise', '96', '3', '2023', '21/02'),
new filme ('corra', '103', '4,5', '1998', '02/05'),
new filme ('pearl', '102', '4,5', '2022', '05/10'),
new filme ('rua do medo: 1994', '108', '2', '2021', '20/06'),
new filme ('a bela adormecida', '75', '4', '1959', '12/06'),

] 

let catalogo = [];

function adicionarFilme(nome, duraçao, nota, ano, data){

    let filme = new filme (nome, duraçao, nota, ano, data);

    catalogo.push(filme);

    alert("Filme adicionado!")

}

