import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextlogComponent } from './textlog.component';

describe('TextlogComponent', () => {
  let component: TextlogComponent;
  let fixture: ComponentFixture<TextlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
