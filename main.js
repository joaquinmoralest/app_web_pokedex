const form = document.querySelector('#formulario');
const buscador = document.querySelector('#buscador');
const btn = document.querySelector('button');
const resultado = document.querySelector('#resultado');
const listadoPokemon = document.querySelector('#listadoPokemon');


const buscarPokemon = e => {
    e.preventDefault();

    const { value } = e.target.pokemon;

    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(response => response.json())
        .then(data => mostrarPokemon(data));
}

const mostrarPokemon = pokemon => {
    resultado.innerHTML = "";

    const div = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', pokemon.sprites.front_default);
    
    div.appendChild(img);
    resultado.appendChild(div);
}

form.addEventListener('submit', buscarPokemon);


