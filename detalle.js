const pokemonDetalles = document.getElementById('pokemonDetail');
const parametros = new URLSearchParams(window.location.search);
const pokemonNombre = parametros.get('name');

// Función para obtener y mostrar los detalles del Pokémon seleccionado
async function fetchPokemonDetalles(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        pokemonDetalles.innerHTML = `
            <h2>${data.name}</h2>
            <img class="img img-fluid" src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height} cm.</p>
            <p>Peso: ${data.weight} kg.</p>
        `;
    } catch (error) {
        console.error('Error fetching pokemon details:', error);
    }
}

fetchPokemonDetalles(pokemonNombre);
