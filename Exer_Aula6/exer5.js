window.onload = function(){
    document.getElementById("cro").onclick = cronometro
    document.getElementById("slide").onclick = slide
    document.getElementById("tab").onclick = tabuada

    var contador = 0
    function cronometro(){
        setInterval(() =>{
            document.getElementById("res1").innerHTML = contador
            contador++
        },1000)
        
    }

    var flag = 1

    function slide(){
        var pro = document.getElementById("pro")
        var ant = document. getElementById("ant")

        pro.onclick = proximosrc
        ant.onclick = voltar
        
    }

    function proximosrc(){
        flag++
        if (flag == 1){ 
             document.getElementById("banner").src="slide/img1.jpg";
        }else if(flag == 2){
            document.getElementById("banner").src="slide/img2.jpg";
        }else if(flag == 3){
            document.getElementById("banner").src="slide/img3.jpg";
        }else if(flag == 4){
            document.getElementById("banner").src="slide/img4.jpg"      
        }else if(flag == 5){
            document.getElementById("banner").src="slide/img5.jpg" 
        }
    }
    
    function voltar(){
        flag--
            if(flag == 1){ 
                document.getElementById("banner").src="slide/img1.jpg";
            }else if(flag == 2){
                document.getElementById("banner").src="slide/img2.jpg";
            }else if(flag == 3){
                document.getElementById("banner").src="slide/img3.jpg";
            }else if(flag == 4){
                document.getElementById("banner").src="slide/img4.jpg";
            }else if(flag == 5){
                document.getElementById("banner").src="slide/img5.jpg";
            }
        }
    

    function tabuada(){
        limpartab()
        document.getElementById("btn").onclick = function(){
            var n1 = Number(document.getElementById("n1").value)
            limpartab()
            for(var t = 0; t <= 10; t++){
                document.getElementById("res3").innerHTML +=`<br>${n1} x ${t} = ${n1*t}`
            }
            
        }

    }

    function limpartab(){
        n1.focus()
        n1.value = ""
        document.getElementById("res3").innerHTML = " "
    }
}