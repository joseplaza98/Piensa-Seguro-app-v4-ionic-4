import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanCapacitacionPage } from './plan-capacitacion.page';

describe('PlanCapacitacionPage', () => {
  let component: PlanCapacitacionPage;
  let fixture: ComponentFixture<PlanCapacitacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCapacitacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanCapacitacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
