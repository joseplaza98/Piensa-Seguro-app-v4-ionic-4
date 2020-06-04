import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaU4Page } from './prueba-u4.page';

describe('PruebaU4Page', () => {
  let component: PruebaU4Page;
  let fixture: ComponentFixture<PruebaU4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaU4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaU4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
