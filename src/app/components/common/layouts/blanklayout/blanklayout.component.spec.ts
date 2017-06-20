import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanklayoutComponent } from './blanklayout.component';

describe('BlanklayoutComponent', () => {
  let component: BlanklayoutComponent;
  let fixture: ComponentFixture<BlanklayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlanklayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanklayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
