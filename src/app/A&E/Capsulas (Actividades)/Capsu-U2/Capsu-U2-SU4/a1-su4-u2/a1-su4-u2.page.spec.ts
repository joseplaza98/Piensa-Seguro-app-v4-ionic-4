import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A1Su4U2Page } from './a1-su4-u2.page';

describe('A1Su4U2Page', () => {
  let component: A1Su4U2Page;
  let fixture: ComponentFixture<A1Su4U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1Su4U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A1Su4U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
