// no js não faz diferença o ; mas colocamos  por habito do php

// passo 5 - funcionalidades do  que foi criado no html

// id para aparecer um box para cada tarefa  nova
let board = document.getElementById('board');
// agora não faz muita diferenca do de cima para o de baixo
// let board = document.querySelector('.board')

// botao para adicionar tarefas
let buttonAdd = document.getElementById('add');

// passo 8 -  para adicionar descricao de nova tarefa:
let inputAdd = document.getElementById('novaTarefa');

// passo 10 - para nao zerar o array criado na renderizacao
// getItem pega informacao e setItem carrega/coloca a informacao
let listaTarefas = [];
if (localStorage.getItem('listaTarefas')) {
    listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'))    
}else{
    // listaTarefas = []; - porque colocamos acima da funcao
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));    
}
// testando agora no navegador, mesmo que atualize a pagina ele mantem as tarefas anteriores

// para armazer as tarefas novas, primeiro cria o array e depois transforma em json (stringify - o parse faz o contrário): - cancelado no passo 10
// let listaTarefas = [];
// localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));

//passo 9 - continuacao:
mostrarNaTela(listaTarefas);

// passo 5 - continuacao
// concluir tarefa - retirar o que eh repetido na funcoa gerarTarefa e manter apenas o que carrega no localStorage
buttonAdd.onclick = function () {
    
    // passo 8 - continuacao:
    let valorDigitado = inputAdd.value;
    // apos criar localStorage, para dar push da tarefa para ele:
    listaTarefas.push(valorDigitado)

    gerarTarefa(valorDigitado, listaTarefas.length - 1)
    // funcao acima substitui o codigo anterior, visto que eh o mesmo
    // fica neste local porque precisa da variavel valorDigitado criada acima
    // adicionado o listaTarefas.lenght - 1, para colocar um numero automatico na varaivel 'posicao'

    // passo 8 - continuação da funcao que puxa a tarefa nova apos - listaTarefas.push(valorDigitado)
    // apos o comando abaixo o teste no navegador, com F12 traz no storage a informação carregada, mas F5 ainda apaga da memoria
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas))
    // para renderizar as tarefas (armazenar em definitivo e retornar na tela) - seguir passo 9
}

// passo 9 - renderizacao das tarefas
// criar functions e copiar o box acima na gerarTarefa
// item eh a informação que estamos armazenando (box tarefa nova)
function mostrarNaTela(listaTarefas) {
    for(let item of listaTarefas){
        gerarTarefa(item)
    }
}

function gerarTarefa(valorDigitado, posicao) {
    let tarefa = document.createElement('div');
    tarefa.setAttribute('class', 'tarefa');
    // criar  o atributo novo 'posicao' para virar um 'id' de cada tarefa criada, e saber selecionar qual concluir/remover. Incluir tambem dna funcao para ela saber que precisa receber essa variavel, e a segunda 'posicao' eh o valor a ser carregado:
    tarefa.setAttribute('posicao', posicao);

    let titulo = document.createElement('div');
    titulo.setAttribute('class', 'col=md-8');
    titulo.textContent = valorDigitado;

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class', 'col-md-2');

    let imgCheck = document.createElement('img');
    imgCheck.setAttribute('class', 'botaoCheck');
    imgCheck.setAttribute('src', 'images/botao_check.png');

    buttonCheck.appendChild(imgCheck);

    //concluir tarefa - criar um evento (objeto) associado ao botao criado quando criamos a tarefa:
    // target diz qual evento foi criado, o primeiro parentNode seleciona a div do botao, o segundo seleciona a div da tarefa inteira
    // let para criar a variavel para aramzenar esta informacao
    // 'remove' exclui a tarefa da tela, mas nao do localStorage ainda
    imgCheck.onclick = function(event){
        // let tarefaPai = event.target.parentNode.parentNode
        // tarefaPai.remove();
        tarefa.remove();
        // a linha de cima eh um resumo do que foi feito nas outras duas, e funciona igual
    }

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
}

