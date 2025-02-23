   let amigos = []
    
    function adicionarAmigo(){
        amigos.push(document.getElementById("amigo").value)
        document.getElementById("amigo").value = ""
        document.getElementById("listaAmigos").innerHTML = amigos.join("<br>")
    }
    
    function sortearAmigo(){
        if(amigos.length == 0){
            alert("Por favor,insira um nome válido")
            return
        }
        
        document.getElementById("resultado").innerHTML = `O amigo secreto sorteado é: ${amigos[Math.floor(Math.random()*amigos.length)]}`
    }
