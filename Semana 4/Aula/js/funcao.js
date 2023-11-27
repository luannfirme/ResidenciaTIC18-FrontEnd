class Tarefas {
    constructor(tarefa){
        this.tarefa = tarefa
    }
}

let tarefas = [];

recuperarHistorico();

function adicinonarTarefa(){
    let tarefa = new Tarefas(document.getElementById('inputTarefa').value);
    tarefas.push(tarefa);
    localStorage.setItem("Tarefas", tarefas)
    document.getElementById('inputTarefa').value = "";
    exibirEmTela();
}

function exibirEmTela(){
    var html = "<ul>";
    tarefas.forEach( function (item){
        html += "<li>"+ item.tarefa + "</li>";
    });
    html += "</ul>";
    document.getElementById('listaTarefas').innerHTML = html;
}

function recuperarHistorico(){
    tarefasHistorico  = JSON.parse(localStorage.getItem("Tarefas"))
    var html = "<ul>";
    tarefasHistorico.forEach( function (item){
        html += "<li>"+ item.tarefa + "</li>";
    });
    html += "</ul>";
   tarefas.push(tarefasHistorico);
}

recuperarHistorico();