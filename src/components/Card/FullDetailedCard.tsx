import React, { FC } from 'react';
import { useGetSinglePokemon } from 'src/hooks/useGetFullPokemonData';
import { capitalizeFirst } from 'src/utils';
import useFullDetailsCardStyles from './FullDetailsCard.styles';
import { Badge } from '../Badge';

type FullDetailedCardProps = {
  name?: string;
};

export const FullDetailedCard: FC<FullDetailedCardProps> = ({ name }) => {
  const classes = useFullDetailsCardStyles();
  const capitalizedName = capitalizeFirst(name);
  const { data, loading } = useGetSinglePokemon({ name: capitalizedName });
  const pokemon = data?.pokemon;
  return (
    <div className={classes.card}>
      {loading ? (
        <span>Loading...</span>
      ) : pokemon ? (
        <>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className={classes.image}
          />
          <div className={classes.content}>
            <div className={classes.title}>{pokemon.name} <span className={classes.number}>#{pokemon.number}</span></div>
            <div className={classes.subtitle}>{pokemon.classification}</div>
          </div>
          <div className={classes.types}>
            {pokemon.types.map(type => (
              <Badge key={type} type={type} />
            ))}
          </div>
          <div className={classes.row}>
            <div><strong>Max CP:</strong> {pokemon.maxCP}</div>
            <div><strong>Max HP:</strong> {pokemon.maxHP}</div>
          </div>
          <div className={classes.row}>
            <div><strong>Flee Rate:</strong> {pokemon.fleeRate}</div>
            <div><strong>ID:</strong> {pokemon.id}</div>
          </div>
          <div className={classes.row}>
            <div><strong>Weight:</strong> {pokemon.weight.minimum} - {pokemon.weight.maximum}</div>
            <div><strong>Height:</strong> {pokemon.height.minimum} - {pokemon.height.maximum}</div>
          </div>
          <div>
            <strong>Resistant:</strong>
            <div className={classes.resistant}>
              {pokemon.resistant.map(res => (
                <span key={res} className={classes.resistantBadge}>{res}</span>
              ))}
            </div>
          </div>
          <div>
            <strong>Weaknesses:</strong>
            <div className={classes.weaknesses}>
              {pokemon.weaknesses.map(weak => (
                <span key={weak} className={classes.weaknessBadge}>{weak}</span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <span>Not found.</span>
      )}
    </div>
  );
};
