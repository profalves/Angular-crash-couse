import { Component } from '@angular/core';
import { IUser } from './interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  addValue: number = 10;

  addCounter() {
    this.addValue++;
  }
  
  public task: string = '';
  public taskList: Array<{ task: string, done: boolean }> = [];

  price = 2.99

  salvar() {
    this.taskList.push({ task: this.task, done: false });
  }

  getData: IUser | undefined;

  setData(event: IUser) {
    this.getData = event
  }
}
