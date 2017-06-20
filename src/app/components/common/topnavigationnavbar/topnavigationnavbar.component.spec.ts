import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavigationnavbarComponent } from './topnavigationnavbar.component';

describe('TopnavigationnavbarComponent', () => {
  let component: TopnavigationnavbarComponent;
  let fixture: ComponentFixture<TopnavigationnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavigationnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavigationnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
