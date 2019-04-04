import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOfferComponent } from './sidebar-offer.component';

describe('SidebarOfferComponent', () => {
  let component: SidebarOfferComponent;
  let fixture: ComponentFixture<SidebarOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
