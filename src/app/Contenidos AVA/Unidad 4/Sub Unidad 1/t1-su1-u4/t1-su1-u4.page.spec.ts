import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T1Su1U4Page } from './t1-su1-u4.page';

describe('T1Su1U4Page', () => {
  let component: T1Su1U4Page;
  let fixture: ComponentFixture<T1Su1U4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1Su1U4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T1Su1U4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
