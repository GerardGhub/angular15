import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      Contact
   </h2>
   <a routerLink="add">Add Contact</a>
   <br>
   <a routerLink="edit/1">Edit Contact</a>
   <div>
   <router-outlet></router-outlet>
   </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
