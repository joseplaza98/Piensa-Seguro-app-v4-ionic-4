import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T3Su1U3Page } from './t3-su1-u3.page';

describe('T3Su1U3Page', () => {
  let component: T3Su1U3Page;
  let fixture: ComponentFixture<T3Su1U3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3Su1U3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T3Su1U3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
