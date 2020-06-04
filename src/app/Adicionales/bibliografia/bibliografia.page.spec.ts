import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BibliografiaPage } from './bibliografia.page';

describe('BibliografiaPage', () => {
  let component: BibliografiaPage;
  let fixture: ComponentFixture<BibliografiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliografiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BibliografiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
