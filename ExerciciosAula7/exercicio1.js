//Usaremos jquery
//Feito em Grupo: Brandon Carlos, Augusto dos Santos, Augusto de Souza e Wesley Moura
$(function(){
    $("#btn1").click(cadastrar);
    $("#btn2").click(exibir);//div
    $("#btn3").click(limpar);
});

function cadastrar(){//quando queremos adicionar algo ou cadastrar, usamos o SET
    localStorage.setItem("nome", $("#txtnome").val()); //adicionamos o nome e valor no "localStorage"
    localStorage.setItem("rgm", $("#txtrgm").val());//quando usamos o "SET" pra pegar o valor digitado no campo usamos o "val()"
    localStorage.setItem("notaDaAvaliacaoParcial", $("#txtavaliacaoparcial").val());
    localStorage.setItem("notaDoProjeto", $("#txtnotaprojeto").val());
    localStorage.setItem("notaDaAvaliacaoRegimental", $("#txtavaliacaoregimental").val());
    //adicionamos tudo no localStorage
    //em seguida apagamos os campos digitados pelo usuário
}



function exibir(){//quando formos exibir algum dado, nós referimos ao GET
    if(localStorage.length > 0){//se tiver algum dado no localStorage entâo... (dá para visualizar)
        /*$("#res").innerText = $("#txtnome").val = localStorage.getItem("nome");//aki apenas usamos o ".val" sem os parenteses(), porque aki o txtnome já tem um valor entâo ele está concatenando com o dado = "nome",  que ficará (nome = valor digitado pelo usuario)
        $("#txtrgm").val = localStorage.getItem("rgm");//aki só tem o (.val) porque o ("#txtrgm") já possui um valor (que foi digitado pelo usuário), etnâo irá pegar esse valor e concatenar com o dado "nome" ficará assim (nome = valor digitado pelo usuário)
        $("#txtavaliacaoparcial").val = localStorage.getItem("notaDaAvaliacaoParcial");
        $("#txtnotaprojeto").val = localStorage.getItem("notaDoProjeto");
        $("#txtavaliacaoregimental").val = localStorage.getItem("notaDaAvaliacaoRegimental");*/
        //$("#res").val = "gfgdgdfgdf";
        var div = document.getElementById("res")
        var tabela = "<table>"
        tabela += "<tr><th>Nome</th><th>RGM</th><th>Avalição Parcial</th><th>Nota Projeto</th><th>Avaliação Regimental</th><th>Média</th><th>Avaliação Final</th></tr>"
        tabela += "<tr>"
        tabela += "<td>"+$("#txtnome").val()+"</td>" + "<td>"+$("#txtrgm").val()+"</td>" + "<td>"+$("#txtavaliacaoparcial").val()+"</td>"+ "<td>"+$("#txtnotaprojeto").val()+ "</td>"+ "<td>"+ $("#txtavaliacaoregimental").val()+"</td>"+ "<td>"+soma()+ "</td>"+"<td>"+conceito()+"</td>";//Pegando o dado "nome" e o valor do campo ("txtnome"), e mostrando em uma DIV
        tabela +="</tr>" 
    }
    tabela += "</table>"
    div.innerHTML = tabela
    
}

function soma(){
    var par = Number( document.getElementById("txtavaliacaoparcial").value)
    var p = Number( document.getElementById("txtnotaprojeto").value)
    var r = Number( document.getElementById("txtavaliacaoregimental").value)
    var cal = (par + p + r)/3
    return cal
}

function conceito(){ //Verificando situação do aluno!!
    var cor;
    if(soma() >= 6 ){
        cor = "<span id='green'>Aprovado</span>"
        return cor
    }else if(soma() >= 3 && soma() < 6){
        cor = "<span id='yellow'>Avaliação Final</span>"
        return cor
    }else if(soma() < 3){
        cor = "<span id='red'>Reprovado</span>"
        return cor
    }
}

function limpar(){//quando eu clicar no botâo (btn3), vai disparar a funçâo limpar(), e essa funçâo limpar(), ela limpa os campos (ao clicar no botâo ("#btn3") - Limpar campos)
    $("#txtnome").val("");//pegamos o campo "txtnome", e limpamos ("");
    $("#txtrgm").val("");//pegamos o campo "txtrgm", e limpamos ("");
    $("#txtavaliacaoparcial").val("");// (""), é o sinal de vazio, podemos usar isso para (limpar campos)
    $("#txtnotaprojeto").val("");
    $("#txtavaliacaoregimental").val("");
} 
