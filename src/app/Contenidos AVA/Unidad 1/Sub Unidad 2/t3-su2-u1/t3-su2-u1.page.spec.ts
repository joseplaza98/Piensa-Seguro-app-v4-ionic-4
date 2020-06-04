import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T3Su2U1Page } from './t3-su2-u1.page';

describe('T3Su2U1Page', () => {
  let component: T3Su2U1Page;
  let fixture: ComponentFixture<T3Su2U1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3Su2U1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T3Su2U1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
