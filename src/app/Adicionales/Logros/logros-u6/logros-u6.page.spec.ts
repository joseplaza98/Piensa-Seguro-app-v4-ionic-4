import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogrosU6Page } from './logros-u6.page';

describe('LogrosU6Page', () => {
  let component: LogrosU6Page;
  let fixture: ComponentFixture<LogrosU6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogrosU6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogrosU6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
