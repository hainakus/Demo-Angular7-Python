import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FauxmodalComponent } from './fauxmodal.component';

describe('FauxmodalComponent', () => {
  let component: FauxmodalComponent;
  let fixture: ComponentFixture<FauxmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FauxmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FauxmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
