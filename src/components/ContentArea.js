import {LitElement, html} from '@polymer/lit-element';
import ContactsList from './ContactsList.js';
import FavoritesList from './FavoritesList.js';
import FormPopup from './FormPopup';

export default class ContentArea extends LitElement {

    static get properties() {
        return {
            popupOpen: Boolean,
            togglePopup: Function,
            saveContact: Function,
            allContacts: Array,
            removeContact: Function
        }
    }

    _render({}) {
        return html`
      <style>
        @import '/assets/css/global.css';
        :host {
          display: block;
        }
        #content-area {
            background: #fcfdff;
            padding: 50px 80px;
        }
      </style>
    <section id="content-area">
        <form-popup popupOpen="${this.popupOpen}" togglePopup="${this.togglePopup}" saveContact="${this.saveContact}"></form-popup>
        <favorites-list allContacts="${this.allContacts}"></favorites-list>
        <contacts-list allContacts="${this.allContacts}" removeContact="${this.removeContact}"></contacts-list>
    </section>
    `;
    }

}

window.customElements.define('content-area', ContentArea);
