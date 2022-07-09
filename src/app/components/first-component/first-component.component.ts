import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Lucas';
  age = 23;
  hobbies: string[] = ['jogar', 'ler', 'assistir'];
  car = {
    model: 'saveiro',
    year: 2002,
  };

  constructor() {}

  ngOnInit(): void {}
}
