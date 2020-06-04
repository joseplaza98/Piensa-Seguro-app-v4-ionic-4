import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A1Su2U5Page } from './a1-su2-u5.page';

describe('A1Su2U5Page', () => {
  let component: A1Su2U5Page;
  let fixture: ComponentFixture<A1Su2U5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1Su2U5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A1Su2U5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
