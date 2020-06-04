import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A2Su3U2Page } from './a2-su3-u2.page';

describe('A2Su3U2Page', () => {
  let component: A2Su3U2Page;
  let fixture: ComponentFixture<A2Su3U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2Su3U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A2Su3U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
