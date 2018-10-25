import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousVersionsComponent } from './previous-versions.component';

describe('PreviousVersionsComponent', () => {
  let component: PreviousVersionsComponent;
  let fixture: ComponentFixture<PreviousVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
