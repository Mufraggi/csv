import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanRowComponent } from './clean-row.component';

describe('CleanRowComponent', () => {
  let component: CleanRowComponent;
  let fixture: ComponentFixture<CleanRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
