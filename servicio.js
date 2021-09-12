let uri = "https://api.spotify.com/v1/artists/3JSSjGYcIkgsrz7892CelT/top-tracks?market=US";

let token = "Bearer BQDpO5Lxd4VWXvh_RMpinhu-zl_-UsiZB27Nmq2pw2tAM8SRgxmNTFpbwJu67nmhs578mPA1o8YedNrN4oue6yqGihqEFq_5JU0NfEn4836ZPoLstkYxiAHYQx4KWOOJQ9Na9ma5Xtjlqr-RvJ5bntX5DOIHgC4f1DY";

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

    //console.log(respuesta.tracks); //Arreglo
    // console.log(respuesta.tracks[0]); // 
    //console.log(respuesta.tracks[0].name);
    //console.log(respuesta.tracks[0].preview_url); 
    //console.log(respuesta.tracks[0].album.images[0].url);
})
.catch(function(error){
    console.log(error);
})

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