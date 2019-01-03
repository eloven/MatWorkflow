import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handson-table',
  templateUrl: './handson-table.component.html',
  styleUrls: ['./handson-table.component.scss']
})
export class HandsonTableComponent implements OnInit {
  dataset: any[] = [
    { id: 1, name: 'Ted Right', address: 'Wall Street', username: 'jack', age: 22, sex: '男'},
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue', username: 'martin', age: 22, sex: '男' },
    { id: 3, name: 'Joan Well', address: 'Broadway', username: 'luna', age: 21, sex: '女' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street', username: 'lucy', age: 22, sex: '女' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street', username: 'joe', age: 22, sex: '男' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive', username: 'James', age: 32, sex: '男' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard', username: 'mary', age: 32, sex: '女' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue', username: 'tom', age: 22, sex: '男' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
