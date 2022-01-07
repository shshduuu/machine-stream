import { Component, OnInit } from '@angular/core';
import { buttons } from 'src/app/constant';
import { Button } from 'src/app/types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appName: string;
  buttons: Button[] = buttons;

  constructor() {
    	this.appName = 'MACHINE STREAM';
  }

  ngOnInit(): void {
  }

  openNewWindow(input: string) {
    window.open(input);
  }

}
