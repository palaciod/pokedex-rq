import { createUseStyles } from "react-jss";
import { AppTheme } from "src/theme";

const useTextFieldStyles = createUseStyles(
  (theme: AppTheme) => ({
    label: {
      display: "flex",
      alignItems: "center",
    },
    input: {
      color: theme.colors.textBlack
    },
  }),
  { name: "TextField" }
);

export default useTextFieldStyles;
