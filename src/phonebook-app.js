import {LitElement, html} from '@polymer/lit-element';
import SideMenu from './components/SideMenu.js';
import ContentArea from './components/ContentArea';

/**
 * `phonebook-app`
 * A very simple app with lit-element.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PhonebookApp extends LitElement {
    constructor() {
        super();
        this.togglePopup = this.togglePopup.bind(this);
        this.popupOpen = false;
        this.allContacts = [{
            address_1: "4A, 13, Yo-kyla",
            address_2: "second address",
            city: "Turku",
            favorite: true,
            first_name: "Hong Duc",
            last_name: "Phan",
            state: "TUK",
            zipcode:"20540"
        }];
        this.saveContact = this.saveContact.bind(this);
        this.removeContact = this.removeContact.bind(this);
    }

    static get properties() {
        return {
            popupOpen: Boolean,
            allContacts: Array
        };
    }

    togglePopup() {
        this.popupOpen = !this.popupOpen;
        //console.log(this.popupOpen);
        //this.requestRender(); //popupOpen is a property so don't need to call requestRender()
    }

    saveContact(contact) {
        function immutablePush(arr, newEntry){
            let v = {};
            newEntry = Object.assign(v, newEntry);
            return [ ...arr, newEntry ]
        }
        this.allContacts = immutablePush(this.allContacts, contact);
        this.togglePopup();
        console.log(this.allContacts);
    }

    removeContact(index) {
        function immutableRemove(arr, index) {
            return arr.slice(0, index).concat(arr.slice(index+1));
        }
        this.allContacts = immutableRemove(this.allContacts, index);
        console.log("Removed: " + index);
    }

    _render({data}) {
        return html`
      <style>
        :host {
          display: block;
        }
        
        .main-page {
            display: grid;
            grid-template-columns: 250px 1fr;
        }
      </style>
      <div class="main-page">
        <side-menu togglePopup="${this.togglePopup}"></side-menu>
        <content-area popupOpen="${this.popupOpen}" togglePopup="${this.togglePopup}" 
            saveContact="${this.saveContact}" allContacts="${this.allContacts}" removeContact="${this.removeContact}"></content-area>
      </div>
    `;
    }

}

window.customElements.define('phonebook-app', PhonebookApp);
