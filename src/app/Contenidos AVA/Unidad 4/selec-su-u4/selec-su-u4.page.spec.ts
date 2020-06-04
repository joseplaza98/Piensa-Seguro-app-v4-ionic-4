import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecSuU4Page } from './selec-su-u4.page';

describe('SelecSuU4Page', () => {
  let component: SelecSuU4Page;
  let fixture: ComponentFixture<SelecSuU4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecSuU4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecSuU4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
