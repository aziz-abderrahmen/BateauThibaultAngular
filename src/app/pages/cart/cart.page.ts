import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';
import { Storage } from '@ionic/storage'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart = [];


  constructor(
    private router: Router,
    private getDataService: GetDataService,
    private storage: Storage,
    private alertCtrl: AlertController) {  }

  ngOnInit() {
    this.getProductsInCart();
  }

  async onProductClick(item): Promise<void> {
    let alert = this.alertCtrl.create({
      message: "Choisissez la quantite",
      buttons: [
        {
          text: "1",
          handler: () => { this.clickButon(item, 1)}
        },
        {
          text: "2",
          handler: () => { this.clickButon(item, 2)}
        },
        {
          text: "3",
          handler: () => { this.clickButon(item, 3)}
        },
        {
          text: "4",
          handler: () => { this.clickButon(item, 4)}
        },
        {
          text: "5",
          handler: () => { this.clickButon(item, 5)}
        },
        {
          text: "Ajouter 1",
          handler: () => { this.clickButon(item, "+1")}
        },
        {
          text: "retirer 1",
          handler: () => { this.clickButon(item, -1)}
        },
      ]
    });
    (await alert).present();
  }

  clickButon(item, quantity){
    for (let i=0;i<this.cart.length;i++){
      if(this.cart[i][0].name == item[0].name){
        if(quantity === "+1"){
          quantity = (this.cart[i][1] + 1)
        }
        if(quantity === -1){
          if(this.cart[i][1] > 1){
            quantity = (this.cart[i][1] - 1)
          }
          else{
            localStorage.removeItem(item.name)
            this.getProductsInCart()
            return 0
          }
        }
        this.cart[i][1] = quantity
      }
    }
  }

  getProductsInCart(){
    this.cart = []
    for (let i=0;i<localStorage.length;i++){
      this.cart = [...this.cart,  [JSON.parse(localStorage.getItem(localStorage.key(i))), this.getQuantity(localStorage.getItem(localStorage.key(i)))]];
      }
    }

    getQuantity(item){
      for (let i=0;i<this.cart.length;i++){
        if(this.cart[i][0] == item[0].name){
          return this.cart[i][1];
        }
      }
      return 1;
    }

  toNavigateHome(){
    this.router.navigate(['/', 'home']);
  }
  toNavigateCart(){
    this.router.navigate(['/', 'cart']);
  }
}
