import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T1Su4U2Page } from './t1-su4-u2.page';

describe('T1Su4U2Page', () => {
  let component: T1Su4U2Page;
  let fixture: ComponentFixture<T1Su4U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1Su4U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T1Su4U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
