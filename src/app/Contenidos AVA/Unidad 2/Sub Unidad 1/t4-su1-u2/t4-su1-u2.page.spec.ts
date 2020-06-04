import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T4Su1U2Page } from './t4-su1-u2.page';

describe('T4Su1U2Page', () => {
  let component: T4Su1U2Page;
  let fixture: ComponentFixture<T4Su1U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4Su1U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T4Su1U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
