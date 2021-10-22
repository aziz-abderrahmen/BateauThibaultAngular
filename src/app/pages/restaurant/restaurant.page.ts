import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  private restaurants;  
  constructor(
    private router: Router,
    private getDataService: GetDataService,
    ) { }

  ngOnInit() {
    this.getDataService.getRestaurants()
    .subscribe(
      (resp)=>{
        this.restaurants = resp
      }
    );
  }

  onRestaurantClick(item): void {
    console.log(item);
    this.router.navigate(['/', 'restaurant-page', item.id]);

  }

}
