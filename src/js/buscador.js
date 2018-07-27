const inputText = document.querySelector("input");
const boton = document.getElementById("btnBuscar");
const listaRestaurant = document.getElementById("resultados");


boton.addEventListener("click", event => {
    let search = document.getElementById("busqueda").value;
    inputText.value = "";
    fetch(`https://developers.zomato.com/api/v2.1/search?q=${search}`, {
            headers: {
                Accept: "application/json",
                "User-Key": "5eb3c33ba04a2dd24da775a9eec097ba"
            }
        })
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            renderInfo(datos);
        })
})


const renderInfo = datos => {
    resultados.innerHTML = "";
    datos.restaurants.forEach((restaurant) => {

        resultados.innerHTML += `<div class="col-12 text-center restoranes">
    <p class="nombreResto">${restaurant.restaurant.name}</p>
    <p class="lugarResto">¿Dónde? ${restaurant.restaurant.location.address}</p>
    <p class="categResto">Categoría: ${restaurant.restaurant.cuisines}</p>
    <p class="col-1 text-center rating">${restaurant.restaurant.user_rating.aggregate_rating}/5.0</p>
    </div>`
    })
}