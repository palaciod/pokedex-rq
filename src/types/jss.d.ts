import "react-jss";
import { AppTheme } from "../theme";

declare module "react-jss" {
  export interface Theme extends AppTheme {}
}
