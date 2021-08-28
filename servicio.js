let uri = "https://api.spotify.com/v1/artists/3JSSjGYcIkgsrz7892CelT/top-tracks?market=US";

let token = "Bearer BQAk3Yu8cceS0s62ZDKEADxkKuz0ZBoAVFyFGNC3sN7sfF43b1ZaV7osTAC8zqmA03xSYUgk8bfyV9ukWsf3cG2_kkKv9WTmnmCv_XawPbaTA3kEW22fAO0ObwwtHYi4aq-PBhF0jp_QcbR5fn-hhCxxQ0gwvpFzfgo";

let parametrosPeticion = {
    method:"GET",
    headers:{
        Authorization:token
    }

}

fetch(uri,parametrosPeticion )
.then(function(respuesta){
    return (respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);
})
.catch(function(error){
    console.log(error);
})