import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A1Su2U3Page } from './a1-su2-u3.page';

describe('A1Su2U3Page', () => {
  let component: A1Su2U3Page;
  let fixture: ComponentFixture<A1Su2U3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1Su2U3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A1Su2U3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
