import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';


@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {
  private recettes;  
  constructor(
    private router: Router,
    private getDataService: GetDataService,
    ) { }

  ngOnInit() {
    this.getDataService.getRecettes()
    .subscribe(
      (resp)=>{
        this.recettes = resp
      }
    );
  }

  onRecetteClick(item): void {
    console.log(item);
    this.router.navigate(['/', 'recette-page', item.id]);

  }
}