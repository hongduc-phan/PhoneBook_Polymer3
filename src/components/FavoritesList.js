import {LitElement, html} from '@polymer/lit-element';

export default class FavoritesList extends LitElement {

    constructor() {
        super();
        this.displayFavoriteContacts = this.displayFavoriteContacts.bind(this);
    }

    static get properties() {
        return {
            allContacts: Array
        }
    }

    displayFavoriteContacts() {
        return this.allContacts.map((contact) => {
            if (contact.favorite) {
                return html`
                <div class="card">
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
                </div> 
                `;
            }
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
            grid-column: 1/4;
        }
        .favorites {
            max-width: 800px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
        }
        .card {
            width: 100%;
            display: grid;
            padding-top: 15px;
            grid-template-columns: 1fr 1fr;
            color: #3d4060;
            border-radius: 10px;
            transition: all .3s ease-in-out;
            cursor: pointer;
            -webkit-box-shadow: 0px 4px 77px -17px  rgba(0,0,0, 0.36);
            -moz-box-shadow: 0px 4px 77px -17px  rgba(0,0,0, 0.36);
            box-shadow: 0px 4px 77px -17px  rgba(0,0,0, 0.36);
        }
        .user-img {
            background-image: url("https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg");
            height: 80px;
            width: 80px;
            background-size: cover;
            background-position: center center;
            border-radius: 60px;
            grid-column: 1/3;
            align-self: center;
            justify-self: center;
        }
        .fullname {
            color: #3d4060;
            font-weight: 700;
            text-transform: capitalize;
            font-size: 1.3em;
            grid-column: 1/3;
            border-bottom: 1px solid rgba(0,0,0,.1);
        }
        .number {
            grid-column: 1/3;
            border-bottom: 1px solid rgba(0,0,0,.1);
        }
        .category {
            border-left: 1px solid rgba(0,0,0,.1);        
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
            padding: 15px;
        }
        
      </style>
        <section class="favorites">
            <h2>Favorites</h2>
            ${this.displayFavoriteContacts()}
        </section>
    `;
    }
}

window.customElements.define('favorites-list', FavoritesList);
