import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T3Su3U2Page } from './t3-su3-u2.page';

describe('T3Su3U2Page', () => {
  let component: T3Su3U2Page;
  let fixture: ComponentFixture<T3Su3U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3Su3U2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T3Su3U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
