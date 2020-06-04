import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A1Su3U3Page } from './a1-su3-u3.page';

describe('A1Su3U3Page', () => {
  let component: A1Su3U3Page;
  let fixture: ComponentFixture<A1Su3U3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1Su3U3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A1Su3U3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
