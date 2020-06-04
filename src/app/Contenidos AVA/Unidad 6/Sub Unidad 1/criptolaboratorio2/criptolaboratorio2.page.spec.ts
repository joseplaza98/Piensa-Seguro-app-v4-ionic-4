import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Criptolaboratorio2Page } from './criptolaboratorio2.page';

describe('Criptolaboratorio2Page', () => {
  let component: Criptolaboratorio2Page;
  let fixture: ComponentFixture<Criptolaboratorio2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Criptolaboratorio2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Criptolaboratorio2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
