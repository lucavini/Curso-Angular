import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListServiceService {
  constructor() {}

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((item) => item.name !== animal.name);
  }
}
