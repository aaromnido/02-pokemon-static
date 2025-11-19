export interface PokemonDetailsResponse {
    id: number;
    name: string;
    stats: Stat[];
    types: Type[];
    sprites: {
        other?: {
            "official-artwork": {
                front_default: string;
            };
        };
    };
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
}

export interface Species {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Species;
}
