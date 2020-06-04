import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A3Su1U2Page } from './a3-su1-u2.page';

describe('A3Su1U2Page', () => {
  let component: A3Su1U2Page;
  let fixture: ComponentFixture<A3Su1U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A3Su1U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A3Su1U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
