import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A3Su1U6Page } from './a3-su1-u6.page';

describe('A3Su1U6Page', () => {
  let component: A3Su1U6Page;
  let fixture: ComponentFixture<A3Su1U6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A3Su1U6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A3Su1U6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
