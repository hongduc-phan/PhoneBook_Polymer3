import {LitElement, html} from '@polymer/lit-element';

export default class FormPopup extends LitElement {

    constructor() {
        super();
        this.formData = {};
        this.change = this.change.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    static get properties() {
        return {
            popupOpen: Boolean,
            togglePopup: Function,
            formData: Object,
        }
    }

    submitForm(event) {
        event.preventDefault();
        this.saveContact(this.formData);
        this.formData = {};
        this._clearForm();
    }

    _clearForm() {
        var inputs = this._root.querySelectorAll('input');
        inputs.forEach(i => {
           if(i.type == 'text') {
               i.value = '';
           } else if(i.type == 'checkbox') {
               i.checked = false;
           }
        });
    }

    change(event){
        let formData = {};
        let name = event.target.name;
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

        formData[name] = value;
        this.formData = Object.assign(this.formData, formData);
    }

    _render({}) {
        return html`
      <style>
        @import '/assets/css/global.css';
        :host {
          display: block;
        }
        .form-popup {
            background: #2b304c;
            height: 100vh;
            width:100vw;
            position: fixed;
            top: 0;
            left:0;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            -webkit-transition: all .3s ease-in-out;
            -moz-transition: all .3s ease-in-out;
            -ms-transition: all .3s ease-in-out;
            -o-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
        }
        .form-popup.active {
            visibility: visible;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            width: 400px;
            grid-gap: 20px;
        }
        h2 {
            font-size: 1.4rem;
            font-weight: 500;
            grid-column: 1/5;
        }
        label{
            background: white;
            font-size: .8rem;
            position: relative;
            top: 10px;
            display: inline-block;
        }
        input[type="text"] {
            padding: 10px;
            display: block;
            width: 100%;
        }
        .first-name {
            grid-column: 1/3;   /*from col 1 to col 3*/
        }
        .last-name {
            grid-column: 3/5;   /*from col 3 to col 5*/
        }
        .address-1 {
            grid-column: 1/5;
        }
        .address-2 {
            grid-column: 1/5;
        }
        .city {
            grid-column: 1/3;
        }
        .button {
            justify-self: end;
            grid-column: 4/5
        }
        .question {
            justify-self: start;
            grid-column: 1/4
        }
        .button button {
            cursor: pointer;
            padding: 10px 25px;
            border: 1px solid rgba(0,0,0,.2);
            color: white;
            border-radius: 5px;
            text-shadow: 0px 10px 2px rgba(150, 150, 150, 0.1);
            background: #1e5799; /* Old browsers */
            background: -moz-linear-gradient(top, #1e5799 0%, #207cca 31%, #207cca 31%, #2989d8 50%, #7db9e8 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, #1e5799 0%,#207cca 31%,#207cca 31%,#2989d8 50%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, #1e5799 0%,#207cca 31%,#207cca 31%,#2989d8 50%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
        }
        .closing-btn {
            position: absolute;
            z-index:3;
            right: 40px;
            top: 20px;
            color: whitesmoke;
            cursor: pointer;
        }
        .closing-btn svg {
            width: 30px;
            height: 30px;
            fill: whitesmoke;
        }
      </style>
    <section className="form-popup ${(this.popupOpen) ?  'active' : ''}">
        <form on-submit="${this.submitForm}">
            <div class="closing-btn" on-click="${this.togglePopup}">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
            </div>
            <h2>Add a new contact</h2>
            <div class="form-group first-name">
                <label for="first_name">First Name</label>
                <input type="text" name="first_name" on-keyup="${this.change}">
            </div>
            <div class="form-group last-name">
                <label for="last_name">Last Name</label>
                <input type="text" name="last_name" on-keyup="${this.change}">
            </div>
            <div class="form-group address-1">
                <label for="address_1">Address #1</label>
                <input type="text" name="address_1" on-keyup="${this.change}">
            </div>
            <div class="form-group address-2">
                <label for="address_2">Address #2</label>
                <input type="text" name="address_2" on-keyup="${this.change}">
            </div>
            <div class="form-group city">
                <label for="city">City</label>
                <input type="text" name="city" on-keyup="${this.change}">
            </div>
            <div class="form-group state">
                <label for="state">State</label>
                <input type="text" name="state" on-keyup="${this.change}">
            </div>
            <div class="form-group zipcode">
                <label for="zipcode">Zipcode</label>
                <input type="text" name="zipcode" on-keyup="${this.change}">
            </div>
            <div class="form-group question">
                <input type="checkbox" id="is-favorite" name="favorite" on-change="${this.change}">
                <label for="is-favorite" style="top: 0">Is Favorite?</label>
            </div>
            <div class="form-group button">
                <button type="submit">Add</button>
            </div>
            
        </form>        
    </section>
    `;
    }

}

window.customElements.define('form-popup', FormPopup);
