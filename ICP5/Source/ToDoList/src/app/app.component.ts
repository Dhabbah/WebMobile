import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'ToDoList';
  task: string;
  tasks = [];

  // addItem() {
  //   this.tasks.push(this.task);
  //   this.task = '';
  // }

  // This function is to store the data into the tasks
  addItem() {
    this.tasks.push({name: this.task});
    this.task = '';
  }
  // This function is to remove a spicfic data
  removeItem(index) {
  this.tasks.splice(index, 1);


  }
  ngOnInit() {
  }
}
