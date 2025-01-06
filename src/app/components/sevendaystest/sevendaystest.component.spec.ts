import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevendaystestComponent } from './sevendaystest.component';

describe('SevendaystestComponent', () => {
  let component: SevendaystestComponent;
  let fixture: ComponentFixture<SevendaystestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevendaystestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevendaystestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
