import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FauxListComponent } from './faux-list.component';

describe('FauxListComponent', () => {
  let component: FauxListComponent;
  let fixture: ComponentFixture<FauxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FauxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FauxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
