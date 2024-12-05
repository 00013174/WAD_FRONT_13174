import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsComponent } from './ingredients.component';

describe('ParticipantsComponent', () => {
  let component: ParticipantsComponent;
  let fixture: ComponentFixture<ParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
