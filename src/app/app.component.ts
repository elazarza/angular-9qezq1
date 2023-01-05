import { Component, } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  items=[0,1,2,3,4,5,6,7,8,9,10,11]
  positions:any[];

  drop(event: CdkDragDrop<any>) {
    this.items[event.previousContainer.data.index]=event.container.data.item
    this.items[event.container.data.index]=event.previousContainer.data.item
    event.currentIndex=0;
    console.log(event.previousContainer.data,'-->',event.container.data)
  }
}
