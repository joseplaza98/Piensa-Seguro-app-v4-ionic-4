import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T1Su1U7Page } from './t1-su1-u7.page';

describe('T1Su1U7Page', () => {
  let component: T1Su1U7Page;
  let fixture: ComponentFixture<T1Su1U7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1Su1U7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T1Su1U7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
