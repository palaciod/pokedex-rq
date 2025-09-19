import { useMemo } from 'react';
import { useQuery } from '@apollo/client/react';
import { Pokemon } from 'src/types/pokemon-types';
import { GET_POKEMONS } from 'src/queries';


export const useGetPokemons = () => {
  const { data, ...queryRes } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151, // Keep hard coded
    },
  });

  const pokemons: Pokemon[] = useMemo(() => data?.pokemons || [], [data]);

  return {
    pokemons,
    ...queryRes,
  };
};
