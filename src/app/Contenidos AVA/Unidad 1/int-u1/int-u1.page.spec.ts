import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntU1Page } from './int-u1.page';

describe('IntU1Page', () => {
  let component: IntU1Page;
  let fixture: ComponentFixture<IntU1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntU1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntU1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
