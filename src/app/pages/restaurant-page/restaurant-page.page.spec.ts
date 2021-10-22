import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantPagePage } from './restaurant-page.page';

describe('RestaurantPagePage', () => {
  let component: RestaurantPagePage;
  let fixture: ComponentFixture<RestaurantPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
