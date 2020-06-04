import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A2Su1U5Page } from './a2-su1-u5.page';

describe('A2Su1U5Page', () => {
  let component: A2Su1U5Page;
  let fixture: ComponentFixture<A2Su1U5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2Su1U5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A2Su1U5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
