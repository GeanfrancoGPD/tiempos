import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojSistemaSolarComponent } from './reloj-sistema-solar.component';

describe('RelojSistemaSolarComponent', () => {
  let component: RelojSistemaSolarComponent;
  let fixture: ComponentFixture<RelojSistemaSolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojSistemaSolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojSistemaSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
