import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CrudappAddPage } from './crudapp-add.page';

describe('CrudappAddPage', () => {
  let component: CrudappAddPage;
  let fixture: ComponentFixture<CrudappAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudappAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudappAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
