$(function(){
    $("#btn").click(function(){
        exibir()
    })
})
function exibir(){
    var vp = document.getElementById("titulo").value;
    var vd = document.getElementById("classi").value;
    var div = document.getElementById("relatorio")
    div.innerHTML = ""
    var tabela = "<table>"
    tabela += "<tr><th>Titulo</th><th>Autor</th><th>Edicao</th><th>Ano Publicação</th><th>Editora</th><th>Local Publicação</th><th>Código</th><th>Assunto</th><th>Publicação</th>"
    for(var i = 0; i < biblioteca.length; i++){
        if(biblioteca[i].Titulo.indexOf(vp)>=0 && biblioteca[i].Classificacao == vd){
        tabela += "<tr>"
        tabela += "<td>"+biblioteca[i].Titulo+"</td>"+"<td>"+biblioteca[i].Autor+"</td>"+"<td>"+biblioteca[i].Edicao+"</td>"+"<td>"+biblioteca[i].AnoPublic+"</td>"+"<td>"+biblioteca[i].Editora+"</td>"+"<td>"+biblioteca[i].LocalPublic+"</td>"+"<td>"+biblioteca[i].Codigo+"</td>"+"<td>"+biblioteca[i].Assunto+"</td>"+"<td>"+biblioteca[i].Classificacao+"</td>"
        tabela += "</tr>"
        
    }
}
    tabela += "</table>" 
    div.innerHTML=tabela
}
