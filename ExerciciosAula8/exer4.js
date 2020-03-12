$(function(){
    $("#btn").click(registros)
})

function registros(){
    var titulo = $("#titulo").val();
    var classificacao = $("#classi").val();
   
    var tabela = "<table>"
    tabela += "<tr><th>Titulo</th><th>Classificaçâo</th></tr>"
    for(var i = 0; i < biblioteca.length; i++){ 
    if(biblioteca[i].Titulo == titulo && biblioteca[i].Classificacao == classificacao){
            tabela += "<tr>"
            tabela += "<td>" + biblioteca[i].Titulo + "</td>" + "<td>" + biblioteca[i].Classificacao + "</td>"
            tabela += "</tr>"

        }

    }
    tabela += "</table>"
    $("#res").html(tabela);
}