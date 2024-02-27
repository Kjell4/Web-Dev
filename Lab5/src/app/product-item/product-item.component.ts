import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  // products = [...products];

  // share(name: string, link: string) {
  //   window.alert('You will be redirected to Telegram!');
  //   window.open(`https://telegram.me/share/url?url=https://t.me/Kjell4 ${link}`);
  // }

  // onNotify() {
  //   window.alert('You will be notified when the product goes on sale');
  // }

}
