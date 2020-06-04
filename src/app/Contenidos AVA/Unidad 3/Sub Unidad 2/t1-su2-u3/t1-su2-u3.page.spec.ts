import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T1Su2U3Page } from './t1-su2-u3.page';

describe('T1Su2U3Page', () => {
  let component: T1Su2U3Page;
  let fixture: ComponentFixture<T1Su2U3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1Su2U3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T1Su2U3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
