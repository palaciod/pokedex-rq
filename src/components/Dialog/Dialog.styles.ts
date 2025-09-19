import { createUseStyles } from "react-jss";
import { AppTheme } from "src/theme";

const useDialogStyles = createUseStyles(
  (theme: AppTheme) => ({
    overlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: theme.colors.dialogOverlay,
    },
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme.colors.dialogBg,
      color: theme.colors.dialogText,
      borderRadius: theme.dialog.borderRadius,
      padding: "1rem",
      width: "fit-content",
    },
    title: {
      marginBottom: "1rem",
      fontSize: theme.dialog.titleFontSize,
      fontWeight: theme.fontWeights.dialogTitle,
    },
    description: {
      marginBottom: "1rem",
      fontSize: theme.dialog.descriptionFontSize,
      opacity: 0.9,
    },
  }),
  { name: "Dialog" }
);

export default useDialogStyles;
