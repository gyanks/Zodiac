import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
      document.getElementById('mySidenav').style.width = '250px';
      return true;
  }
  closeNav() {
      document.getElementById('mySidenav').style.width = '0';
      return true;
  }
}

