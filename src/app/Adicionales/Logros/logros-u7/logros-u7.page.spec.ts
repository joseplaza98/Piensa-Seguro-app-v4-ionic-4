import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogrosU7Page } from './logros-u7.page';

describe('LogrosU7Page', () => {
  let component: LogrosU7Page;
  let fixture: ComponentFixture<LogrosU7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogrosU7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogrosU7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
