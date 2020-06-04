import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntU3Page } from './int-u3.page';

describe('IntU3Page', () => {
  let component: IntU3Page;
  let fixture: ComponentFixture<IntU3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntU3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntU3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
