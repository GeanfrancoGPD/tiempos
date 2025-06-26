import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojVelaComponent } from './reloj-vela.component';

describe('RelojVelaComponent', () => {
  let component: RelojVelaComponent;
  let fixture: ComponentFixture<RelojVelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojVelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojVelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
