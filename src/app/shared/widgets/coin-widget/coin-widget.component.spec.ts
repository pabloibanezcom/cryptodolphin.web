import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinWidgetComponent } from './coin-widget.component';

describe('CoinWidgetComponent', () => {
  let component: CoinWidgetComponent;
  let fixture: ComponentFixture<CoinWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
