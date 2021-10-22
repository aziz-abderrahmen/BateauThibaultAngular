import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  private products;
  private category;
  public ok = false;
  public productCartExist = false;

  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['id'];
    });

    this.getDataService.getProducts()
    .subscribe(
      (resp)=>{
        this.products = resp
      }
    );
  }

  addCart(item): void {
    this.productCartExist = false
    console.log("vous avez ajouter un " + item.name);
    if(this.productInCart(item.name)){
      localStorage.removeItem(item.name)
    }
    else{
      localStorage.setItem(item.name, JSON.stringify(item));
    }
  }

  productInCart(name){
    for (let i=0;i<localStorage.length;i++){
      if(localStorage.key(i)==name){
        return true
      }
    }
    return false
  }

  toNavigateHome(){
    this.router.navigate(['/', 'home']);
  }
  toNavigateCart(){
    this.router.navigate(['/', 'cart']);
  }
}
