import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

    constructor(private http: HttpClient) { }
     
    getProducts() {
        //return this.http.get(`https://us-central1-projetbateau-d52df.cloudfunctions.net/products/`);
        return this.http.get("../assets/json/products.json");
    }

    getRecettes() {
      return this.http.get("../assets/json/recettes.json");
    }
    getBateaux() {
      return this.http.get("../assets/json/bateaux.json");
    }
    getRestaurants() {
      return this.http.get("../assets/json/restaurants.json");
    }
    getCategories() {
      return this.http.get("../assets/json/categories.json");
    }
}
