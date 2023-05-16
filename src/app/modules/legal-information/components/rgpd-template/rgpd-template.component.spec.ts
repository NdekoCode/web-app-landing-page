import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgpdTemplateComponent } from './rgpd-template.component';

describe('RgpdTemplateComponent', () => {
  let component: RgpdTemplateComponent;
  let fixture: ComponentFixture<RgpdTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgpdTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgpdTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
