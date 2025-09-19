import { createUseStyles } from "react-jss";
import { AppTheme } from "src/theme";

const useBadgeStyles = createUseStyles(
  (theme: AppTheme) => ({
    typeBadge: {
      backgroundColor: theme.colors.typeBadgeBg,
      color: theme.colors.typeBadgeText,
      borderRadius: '0.75rem',
      padding: '0.25rem 0.75rem',
      fontSize: '0.8rem',
    },
  }),
  { name: "BadgeStyles" }
);

export default useBadgeStyles;