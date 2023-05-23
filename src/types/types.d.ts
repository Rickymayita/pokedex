export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
}

export type PokemonDetail = {
    name: string;
    id: string;
    imgSrc: string;
    hp: number;
    attack: number;
    specialAtack: number;
    defense: number;
    specialDefense: number;
    speed: number;
    weight: number;
}