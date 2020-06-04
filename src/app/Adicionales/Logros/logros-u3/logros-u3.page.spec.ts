import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogrosU3Page } from './logros-u3.page';

describe('LogrosU3Page', () => {
  let component: LogrosU3Page;
  let fixture: ComponentFixture<LogrosU3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogrosU3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogrosU3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
