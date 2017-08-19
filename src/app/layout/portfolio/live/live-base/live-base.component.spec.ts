import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBaseComponent } from './live-base.component';

describe('LiveBaseComponent', () => {
  let component: LiveBaseComponent;
  let fixture: ComponentFixture<LiveBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
