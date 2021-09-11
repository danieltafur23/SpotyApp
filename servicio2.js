let uri="https://accounts.spotify.com/api/token"

let dato1="grant_type=client_credentials";
let dato2="client_id=4f79757140434bd6a9314c8e04ddaaac";
let dato3="client_secret=30f2b4a59aea4b17a7578b709069d96a";

let parametrosPeticion={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body : dato1+"&"+dato2+"&"+dato3
}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);

    obtenerToken(respuesta);

})
.catch(function(error){
    console.log(error);
})

function obtenerToken(datos){

    let token = datos.token_type + " " + datos.access_token;
    console.log(token) ;
    pedirCanciones(token);


}

function pedirCanciones(token){

    let uri = "https://api.spotify.com/v1/artists/3JSSjGYcIkgsrz7892CelT/top-tracks?market=US";

    let parametrosPeticion = {
        method:"GET",
        headers:{
            Authorization:token
        }
    
    }

    fetch(uri,parametrosPeticion ) //Fetch es una promesa
    .then(function(respuesta){
        return (respuesta.json());
    })
    .then(function(respuesta){
        console.log(respuesta); //Objeto

        pintarDatos(respuesta.tracks);

    })
    .catch(function(error){
        console.log(error);
    })

}

function pintarDatos(datos){

    let fila=document.getElementById("fila");

    datos.forEach(function(cancion){
        
        let columna = document.createElement("div");
        columna.classList.add("col");

        let tarjeta = document.createElement("div");
        columna.classList.add("card");
        columna.classList.add("h-100");


        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent=cancion.name;

        let cardPopularidad = document.createElement("h6");
        cardPopularidad.classList.add("card-title");
        cardPopularidad.textContent="Popularidad: " + cancion.popularity;

        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        let cardAudio = document.createElement("audio");
        cardAudio.classList.add("barra-audio");
        cardAudio.setAttribute("controls", "controls");
        cardAudio.src=cancion.preview_url;

        //PADRES E HIJOS

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(cardBody);
        tarjeta.appendChild(cardFooter);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPopularidad);
        cardFooter.appendChild(cardAudio);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    })
}