import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojArenaComponent } from './reloj-arena.component';

describe('RelojArenaComponent', () => {
  let component: RelojArenaComponent;
  let fixture: ComponentFixture<RelojArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojArenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
