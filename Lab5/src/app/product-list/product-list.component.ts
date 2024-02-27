import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  share(name: string, link: string) {
    window.alert('You will be redirected to Telegram!');
    window.open(`https://telegram.me/share/url?url=https://t.me/Kjell4 ${link}`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  checker = CategoryComponent.categorySelected

  deleteProduct(productIndex: number) {
    this.products.splice(productIndex, 1);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/