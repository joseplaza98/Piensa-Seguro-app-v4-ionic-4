import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaU1Page } from './prueba-u1.page';

describe('PruebaU1Page', () => {
  let component: PruebaU1Page;
  let fixture: ComponentFixture<PruebaU1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaU1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaU1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
