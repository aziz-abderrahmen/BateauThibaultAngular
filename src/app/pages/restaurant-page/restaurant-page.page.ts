import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.page.html',
  styleUrls: ['./restaurant-page.page.scss'],
})
export class RestaurantPagePage implements OnInit {

  public id;
  public name;
  public image;
  public subtitle;
  public description;  

  constructor(
    private route : ActivatedRoute,
    private getDataService: GetDataService,
    ) { 
  }  

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getDataService.getRestaurants()
    .subscribe(
      (resp)=>{
        this.name = resp[this.id].name
        this.image = resp[this.id].image
        this.subtitle = resp[this.id].subtitle
        this.description = resp[this.id].description
      }
    );
  }

}
