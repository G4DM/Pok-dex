async function searchPokemon() {
	try {
		const pokemon = document.getElementById("search-bar").value;
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		const result = document.getElementById("result");

		if (!response.ok) {
			result.style.display = "block";
			result.innerHTML = `
<img id="pokemon-img" src="./img/missingno.webp">
<p id="pokemon-text"><span class="pokemon-id">#????</span> MissingNo.</p>`;
		}

		const data = await response.json();
		const pokemonSprite = data.sprites.front_default;
		const pokemonId = data.id;

		const toTitle = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
		const pokemonName = toTitle(data.forms[0].name);

		result.innerHTML = `
<img id="pokemon-img" src="${pokemonSprite}">
<p id="pokemon-text"><span class="pokemon-id">#${pokemonId}</span> ${pokemonName}</p>`;
		result.style.display = "block";
	} catch (error) {
		console.error(error);
	}
}
