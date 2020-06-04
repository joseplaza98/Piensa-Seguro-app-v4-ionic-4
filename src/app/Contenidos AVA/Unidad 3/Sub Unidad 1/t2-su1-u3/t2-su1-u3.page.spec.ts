import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T2Su1U3Page } from './t2-su1-u3.page';

describe('T2Su1U3Page', () => {
  let component: T2Su1U3Page;
  let fixture: ComponentFixture<T2Su1U3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2Su1U3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T2Su1U3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
