import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojSolarComponent } from './reloj-solar.component';

describe('RelojSolarComponent', () => {
  let component: RelojSolarComponent;
  let fixture: ComponentFixture<RelojSolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojSolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
