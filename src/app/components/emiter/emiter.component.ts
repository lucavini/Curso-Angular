import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css'],
})
export class EmiterComponent implements OnInit {
  myNumber: number = 0;
  user: User = {
    name: '',
    surname: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber() {
    this.myNumber = ++this.myNumber;
  }

  onGetUserProps(data: User): void {
    this.user = {
      name: data.name,
      surname: data.surname,
    }
  }
}
