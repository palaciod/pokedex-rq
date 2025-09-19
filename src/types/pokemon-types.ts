export type Pokemon = {
  id: string;
  name: string;
  number: string;
  types: string[];
  image: string;
};

export type GetPokemonQuery = {
  pokemons: Pokemon[]
}

export type GetPokemonVars = {
  first: number;
}

export interface GetSinglePokemonQuery {
  pokemon: {
    id: string;
    number: string;
    name: string;
    weight: {
      minimum: string;
      maximum: string;
    };
    height: {
      minimum: string;
      maximum: string;
    };
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    image: string;
  } | null;
}

export interface GetSinglePokemonVars {
  id?: string;
  name?: string;
}
