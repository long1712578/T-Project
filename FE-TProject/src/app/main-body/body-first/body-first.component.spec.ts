import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFirstComponent } from './body-first.component';

describe('BodyFirtComponent', () => {
  let component: BodyFirstComponent;
  let fixture: ComponentFixture<BodyFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
