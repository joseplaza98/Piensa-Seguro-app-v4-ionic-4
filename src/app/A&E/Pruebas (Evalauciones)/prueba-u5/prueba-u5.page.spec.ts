import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaU5Page } from './prueba-u5.page';

describe('PruebaU5Page', () => {
  let component: PruebaU5Page;
  let fixture: ComponentFixture<PruebaU5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaU5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaU5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
