import { createUseStyles } from 'react-jss';
import { AppTheme } from 'src/theme';

const useCardStyles = createUseStyles(
  (theme: AppTheme) => ({
    card: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      borderRadius: 8,
      backgroundColor: theme.colors.gray,
      padding: '1rem',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.colors.backgroundHover,
        animation: '$jiggle 0.4s ease-in-out',
      },
    },
    avatar: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.2rem',
    },
    bold: {
      fontWeight: theme.fontWeights.bold,
    },
    types: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      justifyContent: 'start',
      paddingTop: '0.5rem',
    },
    typeBadge: {
      backgroundColor: theme.colors.typeBadgeBg,
      color: theme.colors.typeBadgeText,
      borderRadius: '0.75rem',
      padding: '0.25rem 0.75rem',
      fontSize: '0.8rem',
    },
    subtitle: {
      fontSize: '0.8rem',
      fontWeight: theme.fontWeights.normal,
    },
    '@keyframes jiggle': {
      '0%': { transform: 'rotate(0deg)' },
      '25%': { transform: 'rotate(3deg)' },
      '50%': { transform: 'rotate(-3deg)' },
      '75%': { transform: 'rotate(2deg)' },
      '100%': { transform: 'rotate(0deg)' },
    },
  }),
  { name: 'CardStyles' }
);

export default useCardStyles;
