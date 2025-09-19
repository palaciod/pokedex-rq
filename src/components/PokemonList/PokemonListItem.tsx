import React, { FC } from 'react';
import { Pokemon } from 'src/types/pokemon-types';
import { Card } from 'src/components';
import usePokemonListItemStyles from './PokemonListItem.styles';

type PokemonListItemProps = {
  onSelect?: () => void;
} & Pokemon;

const PokemonListItem: FC<PokemonListItemProps> = ({ id, name, number, image, types, onSelect }) => {
  const classes = usePokemonListItemStyles();
  return (
    <li
      className={classes.root}
      onClick={onSelect}
      data-testid={`pokemon-list-item-${id}`}
    >
      <Card
        imageUrl={image}
        name={name}
        number={number}
        types={types}
        data-testid={`pokemon-card-${id}`}
      />
    </li>
  );
};

export default PokemonListItem;
