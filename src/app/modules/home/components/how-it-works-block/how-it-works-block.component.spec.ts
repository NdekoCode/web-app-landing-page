import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksBlockComponent } from './how-it-works-block.component';

describe('HowItWorksBlockComponent', () => {
  let component: HowItWorksBlockComponent;
  let fixture: ComponentFixture<HowItWorksBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItWorksBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
