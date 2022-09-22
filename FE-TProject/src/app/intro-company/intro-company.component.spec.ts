import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCompanyComponent } from './intro-company.component';

describe('IntroCompanyComponent', () => {
  let component: IntroCompanyComponent;
  let fixture: ComponentFixture<IntroCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
