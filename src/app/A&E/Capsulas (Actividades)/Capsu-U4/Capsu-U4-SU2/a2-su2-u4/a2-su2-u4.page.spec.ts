import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A2Su2U4Page } from './a2-su2-u4.page';

describe('A2Su2U4Page', () => {
  let component: A2Su2U4Page;
  let fixture: ComponentFixture<A2Su2U4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2Su2U4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A2Su2U4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
