import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListServiceService } from 'src/app/service/list-service.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {
      name: 'turca',
      type: 'dog',
    },
    {
      name: 'tom',
      type: 'cat',
    },
    {
      name: 'bob',
      type: 'cat',
    },
  ];
  constructor(private listService: ListServiceService) {}

  showAnimalType(animal: Animal) {
    console.log(animal.type);
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }

  ngOnInit(): void {}
}
