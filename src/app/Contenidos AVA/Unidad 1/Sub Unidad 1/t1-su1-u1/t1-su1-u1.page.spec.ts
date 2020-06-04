import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T1Su1U1Page } from './t1-su1-u1.page';

describe('T1Su1U1Page', () => {
  let component: T1Su1U1Page;
  let fixture: ComponentFixture<T1Su1U1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1Su1U1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T1Su1U1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
