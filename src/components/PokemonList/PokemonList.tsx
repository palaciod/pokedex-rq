import React, { FC, useMemo } from 'react';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import PokemonListItem from './PokemonListItem';
import usePokemonListStyles from './PokemonList.styles';
import { Pokemon } from 'src/types/pokemon-types';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog } from 'src/components/Dialog';
import { FullDetailedCard } from '../Card';

type PokemonListProps = {
  filter: string;
};

export const PokemonList: FC<PokemonListProps> = ({ filter }) => {
  const classes = usePokemonListStyles();
  const { pokemons, loading } = useGetPokemons();
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  const handleClick = (pokemon: Pokemon) => {
    navigate(`/pokemon/${pokemon.name}`);
  };

  const filteredPokemonList = useMemo(() => {
    const filterLowerCase = filter.toLowerCase();
    if (filterLowerCase.length === 0) return pokemons;
    return pokemons?.filter((pokemon: Pokemon) =>
      pokemon?.name?.toLowerCase()?.includes(filterLowerCase?.toLowerCase())
    );
  }, [filter, pokemons]);

  if (loading){
    return <div className={classes.root}>Loading...</div>;
  }

  return (
    <>
      <ul className={classes.root}>
        {loading && <div>Loading...</div>}
        {filteredPokemonList.map((pkmn) => (
          <PokemonListItem  key={pkmn.id} {...pkmn} onSelect={() => handleClick(pkmn)} />
        ))}
      </ul>
      <Dialog
        open={Boolean(pokemonName)}
        onOpenChange={(open) => {
          if (!open) navigate('/pokemon');
        }}
        name={pokemonName}
      >
        <FullDetailedCard name={pokemonName}/>
      </Dialog>
    </>
  );
};
