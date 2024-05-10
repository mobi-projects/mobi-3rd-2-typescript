export type PokemonData = {
    pokeId: number;
    name: string;
    type: Array<
        | "rock"
        | "grass"
        | "ice"
        | "fire"
        | "normal"
        | "poison"
        | "ground"
        | "electric"
        | "flying"
        | "water"
        | "steel"
        | "ghost"
        | "bug"
        | "dragon"
        | "dark"
        | "fairy"
        | "psychic"
        | "fighting"
        | "shadow"
        | "unknown"
        | null
        | undefined
    >;
    url: string;
};

export type Pokemon = {
    data: PokemonData;
};
