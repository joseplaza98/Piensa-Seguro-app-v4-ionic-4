import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T2Su1U2Page } from './t2-su1-u2.page';

describe('T2Su1U2Page', () => {
  let component: T2Su1U2Page;
  let fixture: ComponentFixture<T2Su1U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2Su1U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T2Su1U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
