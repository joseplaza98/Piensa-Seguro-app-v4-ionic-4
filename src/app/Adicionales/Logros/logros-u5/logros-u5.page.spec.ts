import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogrosU5Page } from './logros-u5.page';

describe('LogrosU5Page', () => {
  let component: LogrosU5Page;
  let fixture: ComponentFixture<LogrosU5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogrosU5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogrosU5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
