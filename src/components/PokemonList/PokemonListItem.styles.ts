import { createUseStyles } from "react-jss";

const usePokemonListItemStyles = createUseStyles(
  {
    root: {
      width: '40vw',
      boxSizing: 'border-box',
      padding: '1rem'
    },
  },
  { name: 'PokemonListItem' }
);

export default usePokemonListItemStyles;