import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T3Su1U1Page } from './t3-su1-u1.page';

describe('T3Su1U1Page', () => {
  let component: T3Su1U1Page;
  let fixture: ComponentFixture<T3Su1U1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3Su1U1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T3Su1U1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
