import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A2Su1U6Page } from './a2-su1-u6.page';

describe('A2Su1U6Page', () => {
  let component: A2Su1U6Page;
  let fixture: ComponentFixture<A2Su1U6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2Su1U6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A2Su1U6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
