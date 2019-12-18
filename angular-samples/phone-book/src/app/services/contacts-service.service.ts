import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {
  private contacts: Contact[] = [{
    id: 1,
    name: 'Fran',
    phone: 666555444,
  }, {
    id: 2,
    name: 'Abel',
    phone: 666555444,
  }, {
    id: 3,
    name: 'Jesús',
    phone: 666555444,
  }, {
    id: 4,
    name: 'David',
    phone: 666555444,
  }, ];

  constructor() { }

  public getContactList(): Contact[] {
    return this.contacts;
  }

  public addContactToList(name: string, phone: number): Contact[] {
    let newContactId = 1;

    if (this.contacts.length) {
      newContactId = this.contacts[this.contacts.length - 1].id + 1;
    }

    const contact: Contact = {
      id: newContactId,
      name,
      phone,
    };
    this.contacts.push(contact);

    return this.contacts;
  }

  // TODO: mejorar esta función para que elimine por ID
  public removeContactToList(contact: Contact): Contact[] {
    this.contacts = this.contacts.splice(this.contacts.indexOf(contact), 1);
    return this.contacts;
  }
}
