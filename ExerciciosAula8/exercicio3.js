$(function(){
    $("#exib").click(function(){
        exibir()
    })
})

function exibir(){
    var div = document.getElementById("exiba")
    div.innerHTML += ""
    var tabela = "<table>"
    tabela += "<tr><th>CPF</th><th>RG</th><th>Nome</th><th>Foto</th><th>Data</th><th>Rua</th><th>Contato</th><th>Renda</th>"
    for(var i = 0; i < receita.length; i++){
        tabela += "<tr>"
        tabela += "<td>"+receita[i].CPF+"</td>"+"<td>"+receita[i].RG+"</td>"+"<td>"+receita[i].Nome+"</td>"+"<td><img src='"+receita[i].Foto+"'</td>"+"<td>"+receita[i].Data.Dia+"/"+receita[i].Data.Mes+"/"+receita[i].Data.Ano+"</td>"+"<td>"+receita[i].Rua+"</td>"+"<td>"+"Tel: "+receita[i].Contato.Tel+"<br>"+"Cel: "+receita[i].Contato.Cel+"<br>"+"Email: "+receita[i].Contato.Email+"</td>"+"<td>"+receita[i].Renda+"</td>"
        tabela += "</tr>"  
    }
        tabela += "</table>"
        div.innerHTML=tabela
}
