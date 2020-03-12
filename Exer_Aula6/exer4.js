window.addEventListener("load", function(){
    var n1,n2

    document.getElementById("mais").addEventListener("click", soma)
    document.getElementById("menos").addEventListener("click", menos)
    document.getElementById("vezes").addEventListener("click", vezes)
    document.getElementById("div").addEventListener("click", divisao)
    document.getElementById("potencia").addEventListener("click", potencia)
    document.getElementById("arred").addEventListener("click", arredondar)
    document.getElementById("raiz").addEventListener("click", raiz)
    
    function lerNumeros(){
        n1 = Number(document.getElementById("n1").value)
        n2 = Number(document.getElementById("n2").value)
    }

    function mostrarResultado(res){
        document.getElementById("resul").value = res
    }

    function soma(){
        lerNumeros()
        mostrarResultado(n1 + n2)
    }

    function menos(){
        lerNumeros()
        mostrarResultado(n1-n2)
    }

    function vezes(){
        lerNumeros()
        mostrarResultado(n1 * n2)
    }

    function divisao(){
        lerNumeros()
        mostrarResultado(n1 / n2)
    }

    function potencia(){
        var n3 = Number(prompt("Digite um número: "))
        var n4 = Number(prompt(`Digite o valor elevado de ${n3}: `))
        mostrarResultado(Math.pow(n3,n4))
    }

    function arredondar(){
        var n5 = Number(prompt("Digite um valor REAL p/ arredondar: "))
        mostrarResultado(Math.round(n5))
    }

    function raiz(){
        var n6 = Number(prompt("Digite um número para calcular a raiz: "))
        mostrarResultado(Math.sqrt(n6).toFixed(3).replace(".", ","))
    }

})