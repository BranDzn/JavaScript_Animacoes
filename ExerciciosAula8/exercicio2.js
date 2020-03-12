window.addEventListener("load",function(){
    var div = document.getElementById("biblioteca");
    div.innerHTML = "";
    for(var i=0; i< biblioteca.length; i++){
        div.innerHTML += "<div><br>"+biblioteca[i].Titulo+
        "<div><br>"+biblioteca[i].Autor;
        div.innerHTML += "<div><br>"+biblioteca[i].AnoPublic+
        "<div><br>"+biblioteca[i].Editora+
        "<div><br>"+biblioteca[i].LocalPublic;
        div.innerHTML += "<div><br>"+biblioteca[i].Codigo+
        "<div><br>"+biblioteca[i].Assunto+
        "<div><br>"+biblioteca[i].Classificacao+"<div><br>" 
    }
})//Exercicio feito em grupo Augusto de Souza, Augusto dos Santos e Brandon Carlos