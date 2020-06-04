import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecSuU3Page } from './selec-su-u3.page';

describe('SelecSuU3Page', () => {
  let component: SelecSuU3Page;
  let fixture: ComponentFixture<SelecSuU3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecSuU3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecSuU3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
