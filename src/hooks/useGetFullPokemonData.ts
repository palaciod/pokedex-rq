import { useQuery } from '@apollo/client/react';
import { GET_SINGLE_POKEMON } from 'src/queries';
import { GetSinglePokemonQuery, GetSinglePokemonVars } from "src/types/pokemon-types";

export const useGetSinglePokemon = (variables: GetSinglePokemonVars) => {
  const { data, ...queryRes } = useQuery<GetSinglePokemonQuery, GetSinglePokemonVars>(
    GET_SINGLE_POKEMON,
    { variables }
  );

  return { data, ...queryRes };
};