import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products:any;
  cartProducts:any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if (data!==null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "Espresso",
        description: "Espresso coffee",
        img: "assets/espresso.jpg",
        price: 1
      },
      {
        id: 2,
        title: "Americano",
        description: "Americano coffee",
        img: "assets/americano.jpg",
        price: 2
      },
      {
        id: 3,
        title: "Double Espresso",
        description: "Double Espresso coffee",
        img: "assets/double_espresso.jpg",
        price: 2
      },
      {
        id: 4,
        title: "Short Macchiato",
        description: "Short Macchiato coffee",
        img: "assets/short_macchiato.jpg",
        price: 2
      },
      {
        id: 5,
        title: "Long Macchiato",
        description: "Long Macchiato coffee",
        img: "assets/long_macchiato.jpg",
        price: 2
      },
      {
        id: 6,
        title: "Ristretto",
        description: "Ristretto coffee",
        img: "assets/ristretto.jpg",
        price: 2
      },
      {
        id: 7,
        title: "Cafe Latte",
        description: "Cafe Latte coffee",
        img: "assets/cafe_latte.jpg",
        price: 3
      },
      {
        id: 8,
        title: "Cappuccino",
        description: "Cappuccino coffee",
        img: "assets/cappuccino.jpg",
        price: 3
      },
      {
        id: 9,
        title: "Flat White",
        description: "Flat White coffee",
        img: "assets/flat_white.jpg",
        price: 3
      },
      {
        id: 10,
        title: "Mocha",
        description: "Mocha coffee",
        img: "assets/mocha.jpg",
        price: 3
      }
    ];
  }

    // functions
  addToCart(index) {
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data!==null) {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded=true;
  }

  updateCartData(cartData) {
     this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
