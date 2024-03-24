import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqaureflexComponent } from './sqaureflex.component';

describe('SqaureflexComponent', () => {
  let component: SqaureflexComponent;
  let fixture: ComponentFixture<SqaureflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqaureflexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqaureflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
