import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  websocket: WebSocket | undefined;
  baseUrl = 'wss://codingcase.zeiss.services';
  updateMsg: any[] = [];

  constructor() { }

 public openWebSocket() {
   this.websocket = new WebSocket(this.baseUrl + '/ws' );

   this.websocket.onopen = (event) => {
     console.log('Open:', event)
   }

   this.websocket.onmessage = (event) => {
     const message = JSON.parse(event.data)
     this.updateMsg.push(message)
     console.log(event.data)
     console.log(JSON.parse(event.data))
   }

   this.websocket.onclose = (event) => {
    console.log('Close:', event)
   }
 }

 public closeWebSocket() {
   this.websocket?.close();
 }
}
