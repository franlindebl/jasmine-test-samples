import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list.component';

describe('PhoneListComponent', () => {
  let component: PhoneListComponent;
  let fixture: ComponentFixture<PhoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneListComponent,
      ],
      providers: [
      ],
      imports: [
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('saveContact should save when inputs are OK', () => {
    // Relleno el formulario
    component.newContactFormGroup.get('phone').setValue(123);
    component.newContactFormGroup.get('name').setValue('Test name');

    component.onNewContactSubmit();

    // @ts-ignore
    expect(component.contactsServiceForTesting.contactList).toContain({
      name: 'Test name',
      phone: 123
    });
  });
});

