import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { PokemonList } from '../components';
import { TextField } from 'src/components/TextField';

export const ListPage = () => {
  const classes = useStyles();
  const [ search, setSearch ] = useState('');

  return (
    <div className={classes.root}>
      <TextField value={search} onChange={setSearch} placeholder='Search Pokémon...'/>
      <PokemonList filter={search}/>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '1rem'
    },
  },
  { name: 'ListPage' }
);
