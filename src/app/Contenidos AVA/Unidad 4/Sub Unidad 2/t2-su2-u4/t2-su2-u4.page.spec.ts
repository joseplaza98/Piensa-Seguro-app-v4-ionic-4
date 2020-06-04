import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T2Su2U4Page } from './t2-su2-u4.page';

describe('T2Su2U4Page', () => {
  let component: T2Su2U4Page;
  let fixture: ComponentFixture<T2Su2U4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2Su2U4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T2Su2U4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
