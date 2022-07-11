import globalStyles from "~styles/global.scss";
import globalPageStyles from "~src/pages/global-styles.scss";
import layoutHelperStyles from "~styles/tiny-layout-helper.scss";
import { unsafeCSS } from "lit";

export const componentStyles = [
	unsafeCSS(globalStyles),
	unsafeCSS(layoutHelperStyles)
];

export const pageStyles = [
	unsafeCSS(globalStyles),
	unsafeCSS(layoutHelperStyles),
	unsafeCSS(globalPageStyles),
];
