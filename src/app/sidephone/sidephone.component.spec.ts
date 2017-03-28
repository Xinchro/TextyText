import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidephoneComponent } from './sidephone.component';

describe('SidephoneComponent', () => {
  let component: SidephoneComponent;
  let fixture: ComponentFixture<SidephoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidephoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
