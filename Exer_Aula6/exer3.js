window.onload = function(){
    var plv = document.getElementById("plv")

    document.getElementById("btn1").addEventListener("click", maiuscula)
    document.getElementById("btn2").addEventListener("click", separar)

    function maiuscula(){
        document.getElementById("res").innerHTML = `${plv.value.toUpperCase()} <br>`
        plv.value = ""
        plv.focus()
    }
    
    function separar(){
        document.getElementById("res").innerHTML = ""
        var sep = plv.value.split(" ")
        document.getElementById("res").innerHTML += sep+"<br>"
        document.getElementById("res").innerHTML += "<br> Fiz de dois jeitos <br>"
        var retorno = sep.join("<br>")
        document.getElementById("res").innerHTML += "<br>"+retorno+"<br>"
        /*Fiz de dois jeitos, 
        pois fiquei na duvida com o exer 3.
        Espero que não interfira na nota! Obgd!! :)
        */
        }
    
}