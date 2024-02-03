import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {
  ngOnInit(): void {

  }

roledata:any;

  updateform = new FormGroup({
    userid:new FormControl(""),
    role: new FormControl("", Validators.required),
    isActive: new FormControl(true)
  })

  SaveUser() {

  }


}
