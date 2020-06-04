import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Criptolaboratorio1Page } from './criptolaboratorio1.page';

describe('Criptolaboratorio1Page', () => {
  let component: Criptolaboratorio1Page;
  let fixture: ComponentFixture<Criptolaboratorio1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Criptolaboratorio1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Criptolaboratorio1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
