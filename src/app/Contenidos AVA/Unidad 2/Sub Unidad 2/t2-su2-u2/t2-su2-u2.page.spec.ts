import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T2Su2U2Page } from './t2-su2-u2.page';

describe('T2Su2U2Page', () => {
  let component: T2Su2U2Page;
  let fixture: ComponentFixture<T2Su2U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2Su2U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T2Su2U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
