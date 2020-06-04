import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A3Su1U1Page } from './a3-su1-u1.page';

describe('A3Su1U1Page', () => {
  let component: A3Su1U1Page;
  let fixture: ComponentFixture<A3Su1U1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A3Su1U1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A3Su1U1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
