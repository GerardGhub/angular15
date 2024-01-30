import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import * as alertify from 'alertifyjs'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private route: Router, private service: UserService) { }
  ngOnInit(): void {

  }
  respdata: any;

  RedirectLogin() {
    this.route.navigate(['/login']);
  }

  reactiveform = new FormGroup({
    userid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),

  });

  SaveUser() {
    if (this.reactiveform.valid) {
      console.log(this.reactiveform.value);
      this.service.Registration(this.reactiveform.value).subscribe(item => {
        this.respdata = item;
       
        // console.log(this.respdata);
        if (this.respdata.result == 'pass') {
          // alert("Registered successfully please login");
          alertify.success("Registered successfully please contact admin for activation");
          this.RedirectLogin();
        } else {
          alertify.error('Failed try again');
        }
      });
    }


  }

}
