import React, { FC } from 'react';
import useCardStyles from './Card.styles';
import { Badge } from '../Badge';

type CardProps = {
  imageUrl: string;
  name: string;
  number: string;
  types: string[];
};

export const Card: FC<CardProps> = ({ imageUrl, name, number, types }) => {
  const classes = useCardStyles();
  return (
    <div className={classes.card}>
      <img className={classes.avatar} src={imageUrl} alt={name} />
      <div className={classes.text}>
        <span className={classes.bold}>{name}</span>
        <span className={classes.subtitle}>{number}</span>
        <div className={classes.types}>
            {types.map(type => (
              <Badge key={type} type={type} />
            ))}
          </div>
      </div>
    </div>
  );
};
