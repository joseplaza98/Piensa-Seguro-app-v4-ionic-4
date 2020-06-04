import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecSuU6Page } from './selec-su-u6.page';

describe('SelecSuU6Page', () => {
  let component: SelecSuU6Page;
  let fixture: ComponentFixture<SelecSuU6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecSuU6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecSuU6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
