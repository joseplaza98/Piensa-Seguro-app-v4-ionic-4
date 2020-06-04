import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntU7Page } from './int-u7.page';

describe('IntU7Page', () => {
  let component: IntU7Page;
  let fixture: ComponentFixture<IntU7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntU7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntU7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
