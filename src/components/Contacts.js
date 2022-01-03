import { LitElement, html } from 'lit';

class Contacts extends LitElement {
  static properties = {
    contacts: [],
  };

  constructor() {
    super();
    this.contacts = [
    	{
    		name: 'Zafar Saleem',
    		phone: '123123123',
    		email: 'zafar@email.com'
    	}
    ];
  }

  get contactInput() {
  	return this.renderRoot?.querySelector('.new-contact') ?? null;
  }

  get contactPhone() {
  	return this.renderRoot?.querySelector('.new-phone') ?? null;
  }

  get contactEmail() {
  	return this.renderRoot?.querySelector('.new-email') ?? null;
  }

  saveContact(event) {
  	event.preventDefault();

  	this.contacts.push({
  		name: this.contactInput.value,
  		phone: this.contactPhone.value,
  		email: this.contactEmail.value,
  	});

  	this.contactInput.value = '';
  	this.contactPhone.value = '';
  	this.contactEmail.value = '';

  	this.requestUpdate();
  }

  deleteContact(event, contact) {
  	event.preventDefault();
  	this.contacts = this.contacts.filter(item => item.phone !== contact.phone);
  }

  render() {
    return html`
	    <p>My Contacts</p>
	    <form>
	    	<div>
			    <label>Name:
			    	<input
			    		name="name"
			    		value=""
			    		class="new-contact"
			    		placeholder="Enter contact name">
			    </label>
		    </div>
		    <div>
			    <label>Phone:
			    	<input
			    		name="phone"
			    		value=""
			    		class="new-phone"
			    		placeholder="Enter contact phone">
			    </label>
		    </div>
		    <div>
			    <label>Email:
			    	<input
			    		name="email"
			    		value=""
			    		class="new-email"
			    		placeholder="Enter contact email">
			    </label>
		    </div>
		    <button @click=${this.saveContact}>
		    	Save
		    </button>
	    </form>
	    <div>
		    ${this.contacts.map((contact) => html`
		    		<div>
		    			<p>Name: ${contact.name}</p>
		    			<p>Phone: ${contact.phone}</p>
		    			<p>Email: ${contact.email}</p>
		    			<button @click=${(event) => this.deleteContact(event, contact)}>Delete</button>
		    		</div>
		    	`
		    )}
		  </div>
    `;
  }
}

export default Contacts;
