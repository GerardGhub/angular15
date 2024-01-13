import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  headername = "Angular bakla"

  salary = 0.55;
  isdisabled = true;
  colorname="red";
  font='40px';
  classname='headclass';
  stylevalue={"color":"green","font-size":"30px"}

  colors=['green','red','yellow','pink','violet']


  Functionclick(name: string) {
    alert(name);
  }

}
