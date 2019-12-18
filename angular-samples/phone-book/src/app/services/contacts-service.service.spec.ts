import { TestBed } from '@angular/core/testing';

import { ContactsServiceService } from './contacts-service.service';
import { Contact } from '../models/contact';

describe('ContactsServiceService', () => {
  const fakeContacts: Contact[] = [{
    id: 1,
    name: 'Fran',
    phone: 666555444,
  }, {
    id: 2,
    name: 'Abel',
    phone: 666555444,
  }];

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsServiceService = TestBed.get(ContactsServiceService);
    expect(service).toBeTruthy();
  });

  it('should return the current contact list', () => {
    const service: ContactsServiceService = TestBed.get(ContactsServiceService);
    // @ts-ignore
    service.contacts = [...fakeContacts];
    expect(service.getContactList()).toEqual(fakeContacts);
  });

  it('should save the contact', () => {
    const service: ContactsServiceService = TestBed.get(ContactsServiceService);
    // @ts-ignore
    service.contacts = [...fakeContacts];
    service.addContactToList('Pepe', 123456789);

    const retrievedContacts: Contact[] = service.getContactList();
    const expectedContacts: Contact[] = [...fakeContacts, {
      name: 'Pepe',
      phone: 123456789,
      id: 3
    }];

    expect(retrievedContacts).toEqual(expectedContacts);
  });
});
