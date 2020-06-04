import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntU6Page } from './int-u6.page';

describe('IntU6Page', () => {
  let component: IntU6Page;
  let fixture: ComponentFixture<IntU6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntU6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntU6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
