import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  url = '';
  listItem: any;
  constructor() {
    this.listItem = [
      {
        name: 'Home',
        link: '/home'
      },
      {
        name: 'Products',
        link: '/products'
      },
      {
        name: 'Cart',
        link: '/cart'
      },
      {
        name: 'About',
        link: '/about'
      }
    ];
  }

  add(title, url) {
    if (title !== '' && url !== '') {
      url = `http://${url}`;

      this.listItem.push({
        name: title,
        link: url,
        isNew: true
      });

      this.title = '';
      this.url = '';
    }
  }

}
