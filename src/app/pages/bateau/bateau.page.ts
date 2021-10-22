import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';


@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {
  private bateaux;
  
  constructor(
    private router: Router,
    private getDataService: GetDataService,
    ) { }

  ngOnInit() {
    this.getDataService.getBateaux()
    .subscribe(
      (resp)=>{
        this.bateaux = resp
      }
    );
  }

  onBateauClick(item): void {
    if(item.id == 4){
      console.log(item.id)
      this.router.navigate(['/', 'contact']);
    }
    else{
      this.router.navigate(['/', 'bateau-page', item.id]);
    }
  }
}
