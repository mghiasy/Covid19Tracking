import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryWiseSummaryComponent } from './country-wise-summary.component';

describe('CountryWiseSummaryComponent', () => {
  let component: CountryWiseSummaryComponent;
  let fixture: ComponentFixture<CountryWiseSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryWiseSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryWiseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
