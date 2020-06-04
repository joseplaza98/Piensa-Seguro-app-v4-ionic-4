import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A4Su1U2Page } from './a4-su1-u2.page';

describe('A4Su1U2Page', () => {
  let component: A4Su1U2Page;
  let fixture: ComponentFixture<A4Su1U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A4Su1U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A4Su1U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
