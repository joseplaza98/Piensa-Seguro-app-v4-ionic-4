import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsigniasPage } from './insignias.page';

describe('InsigniasPage', () => {
  let component: InsigniasPage;
  let fixture: ComponentFixture<InsigniasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsigniasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsigniasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
