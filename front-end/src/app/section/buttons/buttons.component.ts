import { Component, OnInit, Output, } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  //컴포넌트에 이벤트를 발생시킬 수 있도록 도와주는 데코레이터 
  @Output() clickEvent = new EventEmitter();
  constructor() {

  }


  start() {
    this.clickEvent.emit(10);
  }
  ngOnInit(): void {
  }

}
