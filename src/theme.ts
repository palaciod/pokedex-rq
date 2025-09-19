export const theme = {
  colors: {
    gray: "#222",
    backgroundHover: "#708090",
    textBlack: 'black',
    typeBadgeBg: '#e0e7ff',
    typeBadgeText: '#3730a3',
    resistantBadgeBg: '#d1fae5',
    resistantBadgeText: '#065f46',
    weaknessBadgeBg: '#fee2e2',
    weaknessBadgeText: '#991b1b',
    subtitle: '#666',
    number: '#888',
    imageBg: '#f6f6f6',
    dialogOverlay: 'rgba(0,0,0,0.6)',
    dialogBg: '#111827',
    dialogText: '#f9fafb',
  },
  fontWeights: {
    bold: 700,
    normal: 500,
    dialogTitle: 600,
  },
  dialog: {
    borderRadius: '0.75rem',
    titleFontSize: '1.25rem',
    descriptionFontSize: '0.9rem',
  }
};

export type AppTheme = typeof theme;