import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

  headername = "Angular bakla"

  salary = 0.45;
 isdisabled=true;
 

  Functionclick(name:string) {
    alert(name);
  }

}
