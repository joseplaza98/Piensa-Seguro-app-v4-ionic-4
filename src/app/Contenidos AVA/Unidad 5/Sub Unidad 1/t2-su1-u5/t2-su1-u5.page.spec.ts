import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T2Su1U5Page } from './t2-su1-u5.page';

describe('T2Su1U5Page', () => {
  let component: T2Su1U5Page;
  let fixture: ComponentFixture<T2Su1U5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2Su1U5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T2Su1U5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
