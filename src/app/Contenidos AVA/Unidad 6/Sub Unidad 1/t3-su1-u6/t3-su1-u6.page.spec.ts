import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T3Su1U6Page } from './t3-su1-u6.page';

describe('T3Su1U6Page', () => {
  let component: T3Su1U6Page;
  let fixture: ComponentFixture<T3Su1U6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3Su1U6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T3Su1U6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
