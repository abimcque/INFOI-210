const pokemonWrapper = document.getElementById('pokemonWrapper');

const pokemons = [
    {
        name: "Charmander",
        nameColor: "darkred",
        type: "fire",
        maxHp: 100,
        moves: ["Scratch", "Ember", "Flamethrower"]
    },
    {
        name: "Squirtle",
        nameColor: "darkBlue",
        type: "water",
        maxHp: 110,
        moves: ["Tackle", "Water Gun", "Bite"]
    },
    {
        name: "Pikachu",
        nameColor: "#786814",
        type: "electric",
        maxHp: 95,
        moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"]
    },
    {
        name: "Raichu",
        nameColor: "#786814",
        type: "electric",
        maxHp: 115,
        moves: ["Quick Attack", "Thunder Shock", "Thunderbolt"]
    }
];

function renderItems() {
    pokemonWrapper.innerHTML = '';

    pokemons.forEach((pokemon) => {

        // Set Pokemon color based on type
        let color;

        if (pokemon.type === "fire") {
            color = "red";
        } else if (pokemon.type === "water") {
            color = "blue";
        } else if (pokemon.type === "electric") {
            color = "#eccd37";
        }

        // Parent element
        const parent = document.createElement("div");

        // Name header
        const header = document.createElement("h1");
        header.innerText = pokemon.name;
        header.style.color = pokemon.nameColor;

        // Type line
        const typeLine = document.createElement("h2");
        typeLine.innerText = pokemon.type;

        // Max HP line
        const maxHPLine = document.createElement("h3");
        maxHPLine.innerText = `HP: ${pokemon.maxHp}`;

        // Moves
        const moveParent = document.createElement("div");

        for (const move of pokemon.moves) {
            moveParent.appendChild(
                document.createTextNode(`${move} `)
            );
        }

        // Number of moves
        const moveCount = document.createElement("p");
        moveCount.innerText = `${pokemon.moves.length} moves`;

        moveParent.appendChild(moveCount);

        // Add all components to parent
        const comps = [
            header,
            typeLine,
            maxHPLine,
            moveParent
        ];

        for (const comp of comps) {
            parent.appendChild(comp);
        }

        // Set Pokemon color
        parent.style.color = color;

        // Add Pokemon to wrapper
        pokemonWrapper.appendChild(parent);
    });
}

renderItems();
