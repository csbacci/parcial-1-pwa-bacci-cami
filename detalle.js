const pokemonDetalles = document.getElementById('pokemonDetail');
const parametros = new URLSearchParams(window.location.search);
const pokemonNombre = parametros.get('nombre');

// Función para obtener y mostrar los detalles del Pokémon seleccionado
async function pokemonDetalles(nombre) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        pokemonDetail.innerHTML = `
            <h2>${data.nombre}</h2>
            <img src="${data.sprites.front_default}" alt="${data.nombre}">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
        `;
    } catch (error) {
        console.error('Error encontrando la API:', error);
    }
}

pokemonDetalles(pokemonNombre);
