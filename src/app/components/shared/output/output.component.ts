import { Component, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() public sendData = new EventEmitter<IUser>();
  userList: IUser[] = [
    { name: 'Maria', age: 20 },
    { name: 'João', age: 21}
  ]; 
  
  getData(id: number) {
    //console.log(this.userList[id]);
    this.sendData.emit(this.userList[id]);
  }

}
