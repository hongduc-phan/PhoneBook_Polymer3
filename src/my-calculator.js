/**
 * Mutable type Object, Array properties need to call requestRender if the value is changed,
 *  in order to update the DOM
 * 
 */
import { LitElement, html } from '@polymer/lit-element';

class MyCalculator extends LitElement {

    constructor() {
        super();
        this.total = {
            number: 0
        };

    }

    static get properties() { 
        return { 
            total: Object
        } 
    }

    _render({ mood }) {
        return html`
            <style>
            .button {
                color: white;
                padding: 15px 25px;
                display: inline-block;
                border-radius: 10px;
                cursor: pointer;
            }

            .add-button { background-color: #00aaff; }

            .sub-button { background-color: #ffaa00; }
            </style>

            <div id="total" class="total">${this.total.number}</div>
            <div id="addBtn" class="button add-button">+</div>
            <div id="subBtn" class="button sub-button">-</div>
        `;
    }

    _firstRendered() {
        this._root.getElementById("addBtn").addEventListener("click", e => {
            this.total.number++;
            this.requestRender();
        });
        this._root.getElementById("subBtn").addEventListener("click", e => {
            this.total.number--;
            this.requestRender();
        });
    }
}

customElements.define('my-calculator', MyCalculator);
