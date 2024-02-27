import { Component, EventEmitter, Output } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  static categorySelected: string
  selectCategory(category: string){
    CategoryComponent.categorySelected = category;
  }
}
