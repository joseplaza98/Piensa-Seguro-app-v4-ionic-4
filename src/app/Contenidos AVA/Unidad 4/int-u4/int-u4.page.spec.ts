import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntU4Page } from './int-u4.page';

describe('IntU4Page', () => {
  let component: IntU4Page;
  let fixture: ComponentFixture<IntU4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntU4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntU4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
