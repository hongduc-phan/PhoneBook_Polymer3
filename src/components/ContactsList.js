import {LitElement, html} from '@polymer/lit-element';

export default class ContactsList extends LitElement {

    constructor() {
        super();
        this.displayAllContacts = this.displayAllContacts.bind(this);
    }

    static get properties() {
        return {
            allContacts: Array,
            removeContact: Function
        }
    }

    displayAllContacts() {
        return this.allContacts.map((contact, index) => {
            return html`
            <div class="contact">
                <div class="user-img"></div>
                <div class="fullname">
                    <span class="text">${contact.first_name} ${contact.last_name}</span>
                    <span class="sub">Full name</span>
                </div>
                <div class="number">
                    <span class="text">${contact.address_1}</span>
                    <span class="sub">Address</span>    
                </div>
                <div class="state">
                    <span class="text">${contact.state}</span>
                    <span class="sub">State</span>    
                </div>
                <div class="category">
                    <span class="text">${contact.zipcode}</span>
                    <span class="sub">Zipcode</span>    
                </div>
                <div class="delete-btn">
                    <svg on-click="${this.removeContact.bind(null, index)}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="far" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg>
                </div>
            </div> 
        `;
        });
    }

    _render({}) {
        return html`
      <style>
        @import '/assets/css/global.css';
        :host {
          display: block;
        }
        h2 {
            color: #3e4162;
            font-weight: 300;
        }
        .contacts {
            max-width: 800px;
        }
        .contact {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 2fr 3fr 1fr 1fr 1fr;
            color: #3d4060;
            padding: 20px;
            border-radius: 10px;
            transition: all .3s ease-in-out;
            cursor: pointer;
        }
        .contact:hover {
            -webkit-box-shadow: 0px 4px 77px -17px  rgba(0,0,0, 0.36);
            -moz-box-shadow: 0px 4px 77px -17px  rgba(0,0,0, 0.36);
            box-shadow: 0px 4px 77px -17px  rgba(0,0,0, 0.36);
        }
        .contact .user-img {
            background-image: url("https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg");
            height: 40px;
            width: 40px;
            background-size: cover;
            background-position: center center;
            border-radius: 10px;
        }
        .contact .fullname {
            color: #3d4060;
            font-weight: 700;
            text-transform: capitalize;
            font-size: 1.3em;
        }
        
        .text {
            display: block;
            text-align: center;
        }
        .sub {
            display: block;
            color: #b4b5c5;
            font-weight: 300;
            font-size: .8rem;
            text-align: center;
            margin: 5px 0;
        }
        .fullname, .user-img, .category, .state, .number {
            font-size: 1.3em;
            font-weight: 400;
        }
        .delete-btn {
            z-index:3;
            cursor: pointer;
            text-align: right;
        }
        .delete-btn svg {
            width: 15px;
            height: 15px;
            transition: all .3s ease-in-out;
        }
        .delete-btn svg:hover {
            width: 18px;
            height: 18px;
            color: red;
        }
        
      </style>
        <section class="contacts">
            <h2>Contacts</h2>
            ${this.displayAllContacts()}
        </section>
    `;
    }
}

window.customElements.define('contacts-list', ContactsList);
