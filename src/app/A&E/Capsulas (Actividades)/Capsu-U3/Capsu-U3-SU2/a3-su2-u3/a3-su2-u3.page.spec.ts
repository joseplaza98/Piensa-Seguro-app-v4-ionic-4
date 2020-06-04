import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A3Su2U3Page } from './a3-su2-u3.page';

describe('A3Su2U3Page', () => {
  let component: A3Su2U3Page;
  let fixture: ComponentFixture<A3Su2U3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A3Su2U3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A3Su2U3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
