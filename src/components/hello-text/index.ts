import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.scss";

export default (): void => defineComponent("hello-text", HelloText);
export class HelloText extends LitElement {
    @property({ type: String }) sub!: string;

    render(): TemplateResult {
        return html`
            <h4>Hello, <slot></slot></h4>
            <p>${this.sub}</p>
        `;
    }

	// Styles can either be in this file (only css)
	// or imported from another file (scss in this case)
	static styles = [...componentStyles, unsafeCSS(scopedStyles), css`
		// More styles here
	`];
}
