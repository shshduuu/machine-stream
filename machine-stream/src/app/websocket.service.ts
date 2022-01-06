import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  baseUrl = 'ws://codingcase.zeiss.services';

  constructor() { }

  public createWebSocket() {
    return new WebSocket(this.baseUrl + '/ws' );
  }
}
