import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T2Su2U5Page } from './t2-su2-u5.page';

describe('T2Su2U5Page', () => {
  let component: T2Su2U5Page;
  let fixture: ComponentFixture<T2Su2U5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2Su2U5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T2Su2U5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
