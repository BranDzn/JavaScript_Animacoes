window.onload = function(){
    var nomes = []
    var i = 0
    var nome = "";
    while(true){
        nome = prompt("Digite um nome: ")
        if(nome != null){
            nomes[i] = nome
            i++
        }else{
            break
        }
    }

    var conteudo = "<table>"
    conteudo += "<tr><th>Indice</th><th>Nome</th></tr>"
    for(var j = 0; j < nomes.length; j++){
        conteudo += "<tr>";
        conteudo += "<td>"+(j+1)+"</td>"
        conteudo += "<td>"+ nomes[j]+"</td>"
        conteudo += "</tr>"
    }
        conteudo += "</table>"
        document.getElementById("res").innerHTML = conteudo 
}