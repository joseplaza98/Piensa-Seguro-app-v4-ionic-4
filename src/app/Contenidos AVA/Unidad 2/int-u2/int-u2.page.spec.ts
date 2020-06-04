import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntU2Page } from './int-u2.page';

describe('IntU2Page', () => {
  let component: IntU2Page;
  let fixture: ComponentFixture<IntU2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntU2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntU2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
