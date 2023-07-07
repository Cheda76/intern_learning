import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DierectiveExampleComponent } from './dierective-example.component';

describe('DierectiveExampleComponent', () => {
  let component: DierectiveExampleComponent;
  let fixture: ComponentFixture<DierectiveExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DierectiveExampleComponent]
    });
    fixture = TestBed.createComponent(DierectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
