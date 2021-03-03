let pokemons = [];
fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
    .then(resp => resp.json())
    .then(json => {
        pokemons = json.results;
        console.log(pokemons);
    })
    .catch(err => {
        console.log("error has occurrer" + err);
    })



function addPokemon(name) {
    var table = document.getElementById("pokemonTable");

    var row = table.insertRow();
    var pokemonName = row.insertCell(0);

    pokemonName.innerHTML = "<a href=#>" + name + "</a>";
}

pokemons.forEach(i => {

    addPokemon([i].name);
});