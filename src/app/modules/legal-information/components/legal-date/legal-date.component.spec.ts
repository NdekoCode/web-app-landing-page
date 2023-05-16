import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDateComponent } from './legal-date.component';

describe('LegalDateComponent', () => {
  let component: LegalDateComponent;
  let fixture: ComponentFixture<LegalDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
