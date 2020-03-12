window.addEventListener("load",function(){
    var div = document.getElementById("relatorio");
    div.innerHTML = "";
    for(var i=0; i< receita.length; i++){
        div.innerHTML += "<div><img src='"+receita[i].Foto+"'<div><br>";
        div.innerHTML += "<div><br>Nome: "+receita[i].Nome+
        "<br>Data Nasc: "+receita[i].Data.Dia+"/"+
                         +receita[i].Data.Mes+"/"+
                         +receita[i].Data.Ano+"<div><br>";
        div.innerHTML += "<div>Endereço: "+receita[i].Rua+
        "<br>Telefone: "+receita[i].Contato.Tel+
        "<br>Celular: "+receita[i].Contato.Cel+
        "<br>Email: "+receita[i].Contato.Email+"<div><br>";
        div.innerHTML += "<div>Renda: "+receita[i].Renda+"<div><br>";
        div.innerHTML += "<div>Conta Corrente: "+receita[i].CC.Banco+
        "<br>Agência: "+receita[i].CC.Agencia+
        "<br>Número: "+receita[i].CC.Num+"<div><br>" 
    };
}); // exercicio feito em grupo, Augusto de Souza, Augusto dos Santos & Brandon Carlos
