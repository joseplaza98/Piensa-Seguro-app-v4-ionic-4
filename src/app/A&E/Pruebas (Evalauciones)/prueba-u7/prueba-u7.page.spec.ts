import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaU7Page } from './prueba-u7.page';

describe('PruebaU7Page', () => {
  let component: PruebaU7Page;
  let fixture: ComponentFixture<PruebaU7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaU7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaU7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
