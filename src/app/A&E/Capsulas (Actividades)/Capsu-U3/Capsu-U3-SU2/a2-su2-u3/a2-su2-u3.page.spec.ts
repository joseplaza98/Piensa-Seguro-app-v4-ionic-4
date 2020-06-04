import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A2Su2U3Page } from './a2-su2-u3.page';

describe('A2Su2U3Page', () => {
  let component: A2Su2U3Page;
  let fixture: ComponentFixture<A2Su2U3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2Su2U3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A2Su2U3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
