import { createUseStyles } from "react-jss";
import { AppTheme } from "src/theme";

const useFullDetailsCardStyles = createUseStyles(
  (theme: AppTheme) => ({
    card: {
      maxWidth: '28rem',
      padding: '1.5rem',
      overflow: 'hidden',
    },
    image: {
      width: '12rem',
      display: 'flex',
      borderRadius: '0.5rem',
      margin: '0 auto',
      backgroundColor: theme.colors.imageBg,
    },
    content: {
      textAlign: 'center',
      margin: '1rem 0',
    },
    title: {
      fontWeight: theme.fontWeights.bold,
      fontSize: '1.5rem',
      marginBottom: '0.25rem',
    },
    subtitle: {
      fontSize: '1rem',
      color: theme.colors.subtitle,
      marginBottom: '0.5rem',
    },
    number: {
      color: theme.colors.number,
      fontSize: '1rem',
    },
    types: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      justifyContent: 'center',
      marginBottom: '0.75rem',
    },
    typeBadge: {
      backgroundColor: theme.colors.typeBadgeBg,
      color: theme.colors.typeBadgeText,
      borderRadius: '0.75rem',
      padding: '0.25rem 0.75rem',
      fontSize: '0.8rem',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
    },
    resistant: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.3rem',
      marginTop: '0.125rem',
      marginBottom: '0.5rem',
    },
    resistantBadge: {
      backgroundColor: theme.colors.resistantBadgeBg,
      color: theme.colors.resistantBadgeText,
      borderRadius: '0.625rem',
      padding: '0.125rem 0.5rem',
      fontSize: '0.85rem',
    },
    weaknesses: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.3rem',
      marginTop: '0.125rem',
    },
    weaknessBadge: {
      backgroundColor: theme.colors.weaknessBadgeBg,
      color: theme.colors.weaknessBadgeText,
      borderRadius: '0.625rem',
      padding: '0.125rem 0.5rem',
      fontSize: '0.85rem',
    },
  }),
  { name: "FullDetailsCard" }
);

export default useFullDetailsCardStyles;