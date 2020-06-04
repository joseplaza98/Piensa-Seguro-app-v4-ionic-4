import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T3Su1U5Page } from './t3-su1-u5.page';

describe('T3Su1U5Page', () => {
  let component: T3Su1U5Page;
  let fixture: ComponentFixture<T3Su1U5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3Su1U5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T3Su1U5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
