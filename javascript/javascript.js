// no js não faz diferença o ; mas colocamos  por habito do php

// passo 5 - funcionalidades do  que foi criado no html

// id para aparecer um box para cada tarefa  nova
let board = document.getElementById('board');
// agora não faz muita diferenca do de cima para o de baixo
// let board = document.querySelector('.board')

// botao para adicionar tarefas
let buttonAdd = document.getElementById('add');

buttonAdd.onclick = function () {
    // onclick = quando o botao eh acionado
    // function() = eh uma funcao anonima, nao pode ser chamada depois para reaproveitamento de codigo, entoa soh eh usada quando sabemos que nao precisamos reutilizar.    

    // testando:    
    // alert("Estou no clik do botao")


    // passo 6 - para que cada nova tarefa crie um novo box
    // createElement = para criar um box novo, dizendo no parenteses que elemento é esse, no caso do  primeiro uma div. Estamos basicamente replicando a estrutura montada no html e bootstrap:
    let tarefa = document.createElement('div');
    // puxar os atributos da classe tarefa:
    tarefa.setAttribute('class', 'tarefa');
    
    // criar a descricao/texto da tarefa:
    let titulo = document.createElement('div');
    titulo.setAttribute('class','col=md-8');
    // para o usuario colocar a descrição da tarefa:
    // estatico para teste:
    titulo.textContent = "Essa é uma nova tarefa";
    
    // criar o botao de check/feito:
    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class','col-md-2');
    
    // criar a imagem do botao check:
    let imgCheck = document.createElement('img');
    // abaixo puxo a classe que criei para controlar o tamanho da imagem:
    imgCheck.setAttribute('class','botaoCheck');
    // puxando a imagem em si do botao:
    imgCheck.setAttribute('src','images/botao_check.png');

    //para colocar o titulo, botao e imagem dentro do "tarefa":
    // abaixo: estou colocando o elemento botao dentro a imagem dele:
    buttonCheck.appendChild(imgCheck);
    // colocando os elementos dentro da "tarefa":
    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    // colocar os box "tarefa" dentro do "board"
    board.appendChild(tarefa);

    // testando agora no navegador, ao apertar o botao "adicionar tarefas", aparece um novo box de tarefa.
}