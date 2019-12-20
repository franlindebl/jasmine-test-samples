import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {
  private contactList: Contact[] = [{
    name: 'Fran',
    phone: 666555444,
  }, {
    name: 'Abel',
    phone: 666555444,
  }, {
    name: 'Jesús',
    phone: 666555444,
  }, {
    name: 'David',
    phone: 666555444,
  }, ];

  constructor() { }

  public getContactList(): Contact[] {
    return this.contactList;
  }

  public addContactToList(name: string, phone: number): Contact[] {
    const contact: Contact = {
      name,
      phone,
    };
    this.contactList.push(contact);

    return this.contactList;
  }

  // TODO: mejorar esta función para que elimine por ID
  public removeContactToList(contact: Contact): Contact[] {
    this.contactList = this.contactList.splice(this.contactList.indexOf(contact), 1);
    return this.contactList;
  }
}
