import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appName: string;
  buttons = [
    {
      name: 'helpButton',
      link: 'https://zeiss.de',
      icon: 'help_outline',
      desc: 'Support',
    },
    {
      name: 'homeButton',
      link: 'https://zeiss.de',
      icon: 'home',
      desc: 'Homepage',
    },
    {
      name: 'messageButton',
      link: 'https://zeiss.de',
      icon: 'textsms',
      desc: 'FAQ',
    },
    {
      name: 'infoButton',
      link: 'https://zeiss.de',
      icon: 'info_outline',
      desc: 'Confluence',
    },
  ];

  constructor() {
    	this.appName = 'MACHINE STREAM';
  }

  ngOnInit(): void {
  }

  openNewWindow(input: string) {
    window.open(input);
  }

}
