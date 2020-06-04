import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntU5Page } from './int-u5.page';

describe('IntU5Page', () => {
  let component: IntU5Page;
  let fixture: ComponentFixture<IntU5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntU5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntU5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
