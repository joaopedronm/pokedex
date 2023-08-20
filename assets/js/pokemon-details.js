const urlParams = new URLSearchParams(window.location.search);
const pokemonNumber = urlParams.get('number'); // Assuming you pass the Pokémon number as a parameter

if (pokemonNumber) {
    pokeApi.getPokemonDetail({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/` })
    .then((pokemon) => {
        const pokemonDetails = document.getElementById('pokemonDetails');
        // Create and populate the HTML content for displaying the Pokémon details
        const detailHtml = `
            <div class="pokemon">

                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <div class='type'>
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </div>
                    <img src="${pokemon.photo}" alt='${pokemon.name}'>
                    <p>More details:</p>
                    <p class='more-detail'><span>Height:</span> ${(pokemon.height)*10} cm</p>
                    <p class='more-detail'><span>Weight:</span> ${(pokemon.weight)/10} kg</p>
                    <p class='more-detail'><span>Abilities:</span> ${pokemon.abilities.join(', ')}</p>
                </div>
            </div>
        `;
        pokemonDetails.innerHTML = detailHtml;
    })
    .catch((error) => console.error(error));
} else {
    console.error('No Pokémon number provided.');
}
