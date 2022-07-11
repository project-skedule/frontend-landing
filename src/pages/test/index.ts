import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { state } from "lit/decorators.js";
import { pageStyles } from "~src/global";
import { getUsername } from "~services/name-service";
import scopedStyles from "./styles.scss";
import { defineComponent } from "~utils/components";

import("~components/hello-text").then(f => f.default());

// Notice page tag style!
export default (): void => defineComponent("app-page--test", TestPage);
export class TestPage extends LitElement {
	@state() username: string | null = null;

	render(): TemplateResult {
		return html`
			<div class="container">
				<hello-text sub="Welcome User">${this.username}</hello-text>
			</div>
		`;
	}

	connectedCallback(): void {
		super.connectedCallback();
		this.username = getUsername();
	}

	// Styles can either be in this file (only css)
	// or imported from another file (scss in this case)
	static styles = [...pageStyles, unsafeCSS(scopedStyles), css`
		// More styles here
	`];
}
