import { PokemonDetail } from "../types/types";
import { formatName } from "../utils/utils";

//https://pokeapi.co/api/v2/pokemon/bulbasaur
export async function fetchPokemon(name: string): Promise<PokemonDetail> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatName(name)}`)

    if(!response.ok){
        throw new Error(`Error fetching ${name}`)
    }
    const result = await response.json()
    
    const pokemon = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.other.dream_world.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        specialAtack: result.stats[3].base_stat,
        specialDefense: result.stats[4].base_stat,
        speed: result.stats[5].base_stat,
        weight: result.weight
    }
    return pokemon
}