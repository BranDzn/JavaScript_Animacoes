/*Foi trabalhoso, errei varias coisas, mas n desisti,
 identifiquei os erros e os arrumei*/
 
$(function(){
    nome.focus()
    $("#cad").click(function (){ 
       valiEcad() //Chamando a função com um click!!
    })

    $("#exibir").click(function(){
        exibir() //Chamando a função com um click!!
    })
   
})
//Declarando os vetores com o escopo global!!
var nomes = []
var rgms = []
var nPar = []
var nExer = []
var nProj = []
var nReg = []
var soma = []
var conceitos = []
var indice = 0

function valiEcad(){//Validando e Cadastrando!!
    let nome = $("#nome")
    let rgm = $("#rgm")
    let notaParc = $("#notParci")
    let notaExercicio = $("#notExer")
    let notaProjeto = $("#notProj")
    let notaRegimental = $("#notReg")

    if(nome.val().length == "" || rgm.val().length == "" || notaParc.val().length == "" || notaExercicio.val().length == ""
     || notaProjeto.val().length == "" || notaRegimental.val().length == ""){
        alert("Preencha Todos os Campos!!")
    }else if(notaParc.val() <= 2 && notaExercicio.val() <= 1 && notaProjeto.val() <= 2 && notaRegimental.val() <= 5){
                nomes[indice] = nome.val()
                rgms[indice] = parseInt(rgm.val())
                nPar[indice] = Number(notaParc.val())
                nExer[indice] = Number(notaExercicio.val())
                nProj[indice] = Number(notaProjeto.val())
                nReg[indice] = Number(notaRegimental.val())
                soma[indice] = somas(nPar, nExer, nProj, nReg)
                conceitos[indice] = conceito()
                indice++
                limpar()
                }else{
                alert("Verifique os dados Digitados!!")
            }
} 

function exibir(){ //Exibindo os dados cadastrados!!
        var div = document.getElementById("res")
        div.innerHTML += ""
        var tabela = "<table>"
        tabela += "<tr><th>RGM</th><th>Nome</th><th>Nota Parcial</th><th>Nota Exer</th><th>Nota Projeto</th><th>Nota Regimental</th><th>Avaliação</th><th>Situação</th></tr>"
        for(var i = 0; i < nomes.length; i++){
            tabela += "<tr>"
            tabela += `<td>${rgms[i]}</td><td>${nomes[i]}</td><td>${nPar[i]}</td><td>${nExer[i]}</td><td>${nProj[i]}</td><td>${nReg[i]}</td><td>${soma[i]}</td><td>${conceitos[i]}</td>`
            tabela += `</tr>` 
        }
        tabela += "</table>"
        div.innerHTML = tabela
    }

var somas = function(nPar, nExer, nProj, nReg){ //Calculando as notas!!
    return nPar[indice]+nExer[indice]+nProj[indice]+nReg[indice] 
}

function conceito(){ //Verificando situação do aluno!!
    if(soma[indice] >= 6 ){
        var cor1 = "<span id='green'>Aprovado</span>"
        return cor1
    }else if(soma[indice] >= 3 && soma[indice] < 6){
        var cor2 = "<span id='yellow'>Avaliação Final</span>"
        return cor2
    }else if(soma[indice] < 3){
        var cor3 = "<span id='red'>Reprovado</span>"
        return cor3
    }
}

function limpar(){ //limpando os campos!!
        $("#nome").val("")
        $("#rgm").val("")
        $("#notParci").val("")
        $("#notExer").val("")
        $("#notProj").val("")
        $("#notReg").val("")
        nome.focus()
}