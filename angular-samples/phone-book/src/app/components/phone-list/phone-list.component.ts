import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from 'src/app/services/contacts-service.service';
import { Contact } from 'src/app/models/contact';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
  public contactList: Contact[] = [];
  public newContactFormGroup: FormGroup = null;

  constructor(private contactsServiceService: ContactsServiceService) { }

  ngOnInit() {
    // Pedimos la lista de contactos
    this.updateContactList();

    // Creamos un formulario para dar de alta nuevos contactos
    this.newContactFormGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
    });
  }

  public onNewContactSubmit() {
    if (this.newContactFormGroup.invalid) {
      alert('Revisa el formulario...');
    } else {
      const name: string = this.newContactFormGroup.get('name').value;
      const phone: number = this.newContactFormGroup.get('phone').value;
      this.contactsServiceService.addContactToList(name, phone);
      this.newContactFormGroup.reset();
    }
  }

  public updateContactList() {
    this.contactList = this.contactsServiceService.getContactList();
  }
}
