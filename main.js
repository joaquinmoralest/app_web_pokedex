const form = document.querySelector('#formulario');
const buscador = document.querySelector('#buscador');
const btn = document.querySelector('button');
const resultado = document.querySelector('#resultado');
const listadoPokemon = document.querySelector('#listadoPokemon');

const pokemonList = [];

const data = () => {
    for (let i = 1; i <= 898; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => pokemonList.push(data));
    };
};

data();

const buscarPokemon = e => {
    e.preventDefault();

    const { value } = e.target.pokemon;

    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(response => response.json())
        .then(data => mostrarPokemon(data));
};

const pokemonHTML = pokemon => {
    const card = document.createElement('div');
    const avatar = document.createElement('div');
    const titulo = document.createElement('h4');
    const tipo = document.createElement('p');    
    const img = document.createElement('img');
    const stats = document.createElement('div');
    const hp = document.createElement('p');  
    const attack = document.createElement('p');  
    const defense = document.createElement('p');  
    const spAttack = document.createElement('p');  
    const spDefense = document.createElement('p');  
    const speed = document.createElement('p');  

    titulo.textContent = pokemon.name.toUpperCase();
    tipo.textContent = pokemon.types[0].type.name.toUpperCase();
    hp.textContent = pokemon.stats[0].stat.name + ' ' + pokemon.stats[0].base_stat;
    attack.textContent = pokemon.stats[1].stat.name + ' ' + pokemon.stats[1].base_stat;
    defense.textContent = pokemon.stats[2].stat.name + ' ' + pokemon.stats[2].base_stat;
    spAttack.textContent = pokemon.stats[3].stat.name + ' ' + pokemon.stats[3].base_stat;
    spDefense.textContent = pokemon.stats[4].stat.name + ' ' + pokemon.stats[4].base_stat;
    speed.textContent = pokemon.stats[5].stat.name + ' ' + pokemon.stats[5].base_stat;
    img.setAttribute('src', pokemon.sprites.front_default);
    
    card.classList.add('card-pokemon');
    avatar.classList.add('avatar');
    tipo.classList.add('tipo');
    img.classList.add('img-pokemon');
    stats.classList.add('stats');

    avatar.appendChild(img);
    stats.appendChild(hp);
    stats.appendChild(attack);
    stats.appendChild(defense);
    stats.appendChild(spAttack);
    stats.appendChild(spDefense);
    stats.appendChild(speed);
    card.appendChild(titulo);    
    card.appendChild(avatar);
    card.appendChild(tipo);
    card.appendChild(stats);

    return card;
};

const mostrarPokemon = pokemon => {
    resultado.innerHTML = "";

    const card = pokemonHTML(pokemon);

    resultado.appendChild(card);
};

const listarPokemon = () => {
    pokemonList.forEach(pokemon => {
        const card = pokemonHTML(pokemon);

        listadoPokemon.appendChild(card);
    });
};

listarPokemon();
form.addEventListener('submit', buscarPokemon);

