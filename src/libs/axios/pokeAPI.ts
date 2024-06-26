import { ColorRoot } from "../../types/pokeTypes/pokeColorType";
import { PokeNamedRoot } from "../../types/pokeTypes/pokeNamedType";
import { PokemonRoot } from "../../types/pokeTypes/pokemonType";
import { SpeciesRoot } from "../../types/pokeTypes/speciesType";

import { pocketmonInstance } from "./axiosInstance";

interface TypeRoot {
    id: number;
    name: string;
}

interface getAllType {
    limit: number;
    offset: number;
}

export const getAllPocketmon = async ({ limit, offset }: getAllType) => {
    const response = await pocketmonInstance.get<PokeNamedRoot>(
        `/pokemon/?limit=${limit}&offset=${offset}`
    );
    return response.data;
};

export const getPokemonSpecies = async (pokeId: number) => {
    const response = await pocketmonInstance.get<SpeciesRoot>(
        `/pokemon-species/${pokeId}`
    );
    return response.data;
};

export const getPokeColor = async (pokeId: number) => {
    const response = await pocketmonInstance.get<ColorRoot>(
        `pokemon-color/${pokeId}`
    );
    return response.data;
};

export const getPokemon = async (pokeId: number) => {
    const response = await pocketmonInstance.get<PokemonRoot>(
        `pokemon/${pokeId}`
    );
    return response.data;
};

export const getPokeType = async (pokeId: number) => {
    const response = await pocketmonInstance.get<TypeRoot>(`type/${pokeId}`);
    return response.data;
};
