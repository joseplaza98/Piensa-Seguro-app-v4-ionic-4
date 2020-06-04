import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T4Su1U6Page } from './t4-su1-u6.page';

describe('T4Su1U6Page', () => {
  let component: T4Su1U6Page;
  let fixture: ComponentFixture<T4Su1U6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4Su1U6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T4Su1U6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
