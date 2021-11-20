function buscar(){

    var musica=document.getElementById("buscador").value;
    console.log("ID:"+ musica);


    fetch("https://cupuld.github.io/JsonApiMusic/music.json")
    
    
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        long=data.figures.length;
        console.log("lenght:"+long);
        console.log(data.figures);
        musica=parseInt(musica); 

        var res=data.figures.filter(item=>item.id===musica);
        console.log("res:"+res);

            var id = document.getElementById("id");
            id.innerHTML= "<b> Id: </b>"+res[0].id;

            var title =document.getElementById("title");
            title.innerHTML= "<b> Musica: </b>"+res[0].name;

            var autor =document.getElementById("autor");
            autor.innerHTML= "<b> Autor: </b>"+res[0].Author;
            
            var img =document.getElementById("imagen")
            img.src= res[0].covers;

            var play =document.getElementById("play");
            play.innerHTML= " Play "
            play.setAttribute("href", res[0].play);
            play.target="_blanck"


              

    })

    .catch(function(error){
        console.log(error);     
    })

    function crearNodo(elemento){
        return document.createElement(elemento)
    }
    function adjuntar(padre,hijo){
        return padre.appendChild(hijo)
        
    }

}