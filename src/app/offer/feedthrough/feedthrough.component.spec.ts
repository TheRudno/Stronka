import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedthroughComponent } from './feedthrough.component';

describe('FeedthroughComponent', () => {
  let component: FeedthroughComponent;
  let fixture: ComponentFixture<FeedthroughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedthroughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
