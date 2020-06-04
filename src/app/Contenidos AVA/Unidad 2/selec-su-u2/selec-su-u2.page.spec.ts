import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecSuU2Page } from './selec-su-u2.page';

describe('SelecSuU2Page', () => {
  let component: SelecSuU2Page;
  let fixture: ComponentFixture<SelecSuU2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecSuU2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecSuU2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
