import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBaseComponent } from './portfolio-base.component';

describe('PortfolioBaseComponent', () => {
  let component: PortfolioBaseComponent;
  let fixture: ComponentFixture<PortfolioBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
