import { gql, TypedDocumentNode } from "@apollo/react-hooks";
import { GetPokemonQuery, GetPokemonVars, GetSinglePokemonQuery, GetSinglePokemonVars } from "src/types/pokemon-types";

export const GET_POKEMONS: TypedDocumentNode<GetPokemonQuery, GetPokemonVars> = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      types
      image
    }
  }
`;

export const GET_SINGLE_POKEMON: TypedDocumentNode<GetSinglePokemonQuery, GetSinglePokemonVars> = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;