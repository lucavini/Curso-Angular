import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface User {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Output() userProps: EventEmitter<User> = new EventEmitter();

  user: User = {
    name: 'lucas',
    surname: 'vinicius',
  };

  constructor() {}

  ngOnInit(): void {
    this.userProps.emit(this.user);
  }

  handleClick() {
    this.changeNumber.emit();
  }
}
