import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A1Su1U4Page } from './a1-su1-u4.page';

describe('A1Su1U4Page', () => {
  let component: A1Su1U4Page;
  let fixture: ComponentFixture<A1Su1U4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1Su1U4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A1Su1U4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
