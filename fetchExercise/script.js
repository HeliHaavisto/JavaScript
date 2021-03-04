(function () {
    let pokemons = [];
    //*getting Pokemons large list
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
        .then(resp => resp.json())
        .then(json => {
            pokemons = json.results;
            pokemons.forEach(addPokemon);
        })
        .catch(err => {
            console.log("error has occurred" + err);
        })
    //* adding each Pokemon name, fetching more Pokemon data, taking from that data the specific Pokemon's url to find picture of that Pokemon
    function addPokemon(pokemon) {
        var table = document.getElementById("pokemonTable");
        let onePokemon = [];
        var row = table.insertRow();
        var pokemonName = row.insertCell(0);

        fetch(pokemon.url)
            .then(resp => resp.json())
            .then(json => {
                // console.log(json);
                onePokemon = json;
                // console.log(onePokemon);

                pokemonName.innerHTML = "<a href=" + onePokemon.sprites.front_default + " >" + pokemon.name + "</a>";
            })


        // pokemonName.innerHTML = "<a href=" + pokemon.url + ">" + pokemon.name + "</a>";
    }
})();
