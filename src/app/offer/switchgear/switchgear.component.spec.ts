import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchgearComponent } from './switchgear.component';

describe('SwitchgearComponent', () => {
  let component: SwitchgearComponent;
  let fixture: ComponentFixture<SwitchgearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchgearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchgearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
