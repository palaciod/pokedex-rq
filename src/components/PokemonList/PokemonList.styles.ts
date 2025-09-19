import { createUseStyles } from "react-jss";

const usePokemonListStyles = createUseStyles(
  {
    root: {
      width: 'fit-content',
      padding: '1rem',
      boxSizing: 'border-box',
      listStyle: 'none',
      margin: 0
    },
  },
  { name: 'PokemonList' }
);

export default usePokemonListStyles;


