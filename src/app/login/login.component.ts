import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private route:Router) {

  }

  ngOnInit(): void {
    localStorage.clear();
  }

  resdata: any;


  ProceedLogin(logindata: any) {
    // console.log(logindata);
    if (logindata) {
      console.log(logindata);
      this.service.ProceedLogin(logindata).subscribe(item => {
        this.resdata = item;
        if (this.resdata != null) {
          localStorage.setItem('token', this.resdata.jwtToken);
          this.route.navigate(['home']);
        } else {
          alert("Login Failed!");
        }

        console.log(this.resdata);
      });
    }

  }


  RedirectRegister() {
    this.route.navigate(['access/register']);
  }


}
