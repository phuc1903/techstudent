import CustomFlowbiteTheme from "./CustomFlowbiteTheme";
import "./GlobalStylesCustom.scss";
import "./TypographyCustom.scss";

function GlobalStyles({children}) {
    return <CustomFlowbiteTheme>{children}</CustomFlowbiteTheme>;
}

export default GlobalStyles;