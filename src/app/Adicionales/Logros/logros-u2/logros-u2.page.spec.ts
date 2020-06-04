import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogrosU2Page } from './logros-u2.page';

describe('LogrosU2Page', () => {
  let component: LogrosU2Page;
  let fixture: ComponentFixture<LogrosU2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogrosU2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogrosU2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
