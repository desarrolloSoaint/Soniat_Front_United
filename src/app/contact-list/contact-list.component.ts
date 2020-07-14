import { Component, OnInit } from '@angular/core';
//import { ContactService } from '../services/contact.service';
//import { ContactComponent } from '../contact/contact.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'app/services/auth.service';
import { State } from 'app/models/state';
import { Country } from 'app/models/country';
import { Gender } from 'app/models/gender';
import { StateCivil } from 'app/models/state-civil';
import { Profession } from 'app/models/profession';
import { Currency } from 'app/models/currency';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  isPopupOpened = true;
  gender: Gender[] = [];
  country: Country[] = [];
  state: State[] = [];
  stateCivil: StateCivil[] = [];
  profession: Profession[] = [];
  currency: Currency[] = [];
  constructor(private dialog?: MatDialog,private authService?: AuthService,
   // private _contactService?: ContactService,
    ) { }

  ngOnInit() {
    
    this.authService.currency().subscribe(
      data => {
        this.currency = data;
      },
      err => {
        console.log(err);
      }
    );

    this.authService.country().subscribe(
      data => {
        this.country = data;
      },
      err => {
        console.log(err);
      }
    );

    this.authService.profession().subscribe(
      data => {
        this.profession = data;
      },
      err => {
        console.log(err);
      }
    );

    this.authService.stateCivil().subscribe(
      data => {
        this.stateCivil = data;
      },
      err => {
        console.log(err);
      }
    );

    this.authService.state().subscribe(
      data => {
        this.state = data;
      },
      err => {
        console.log(err);
      }
    );
    this.authService.gender().subscribe(
      data => {
        this.gender = data;
        console.log(this.gender,'err');

      },
      err => {
        console.log(err);
      }
    );
  }

  // get ContactList() {
  //   return this._contactService.getAllContacts();
  // }

  // addContact() {
  //   this.isPopupOpened = true;
  //   const dialogRef = this.dialog.open(ContactComponent, {
  //     data: {}
  //   });


  //   dialogRef.afterClosed().subscribe(result => {
  //     this.isPopupOpened = false;
  //   });
  // }

  // editContact(id: number) {
  //   this.isPopupOpened = true;
  //   const contact = this._contactService.getAllContacts().find(c => c.ID === id);
  //   const dialogRef = this.dialog.open(ContactComponent, {
  //     data: contact
  //   });


  //   dialogRef.afterClosed().subscribe(result => {
  //     this.isPopupOpened = false;
  //   });
  // }

  // deleteContact(id: number) {
  //   this._contactService.deleteContact(id);
  // }
}
