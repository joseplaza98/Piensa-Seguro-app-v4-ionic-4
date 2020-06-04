import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecSuU5Page } from './selec-su-u5.page';

describe('SelecSuU5Page', () => {
  let component: SelecSuU5Page;
  let fixture: ComponentFixture<SelecSuU5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecSuU5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecSuU5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
