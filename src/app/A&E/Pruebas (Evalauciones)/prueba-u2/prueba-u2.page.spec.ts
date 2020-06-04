import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaU2Page } from './prueba-u2.page';

describe('PruebaU2Page', () => {
  let component: PruebaU2Page;
  let fixture: ComponentFixture<PruebaU2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaU2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaU2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
