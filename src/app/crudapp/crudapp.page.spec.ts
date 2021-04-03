import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudappPage } from './crudapp.page';

describe('CrudappPage', () => {
  let component: CrudappPage;
  let fixture: ComponentFixture<CrudappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
