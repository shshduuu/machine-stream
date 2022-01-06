import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  constructor(public websocketService: WebsocketService) { }

  ngOnInit(): void {
    this.websocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.websocketService.closeWebSocket();
  }

}
