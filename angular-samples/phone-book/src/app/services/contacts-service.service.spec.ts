import { TestBed } from '@angular/core/testing';

import { ContactsServiceService } from './contacts-service.service';
import { Contact } from 'src/app/models/contact';

describe('ContactsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsServiceService = TestBed.get(ContactsServiceService);
    expect(service).toBeTruthy();
  });

  it('getContactList should return the contact list', () => {
    const service: ContactsServiceService = TestBed.get(ContactsServiceService);
    const fakeContacts: Contact[] = [{
      name: 'Test 1',
      phone: 111
    }, {
      name: 'Test 2',
      phone: 222
    }];

    // @ts-ignore
    service.contactList = fakeContacts;

    expect(service.getContactList()).toEqual(fakeContacts);
  });

  it('saveNewContact should save the contact in the list', () => {
    const service: ContactsServiceService = TestBed.get(ContactsServiceService);
    const fakeContact: Contact = {
      name: 'Fake',
      phone: 123123123
    };
    service.addContactToList(fakeContact.name, fakeContact.phone);

    // @ts-ignore
    expect(service.contactList).toContain(fakeContact);
  });
});
