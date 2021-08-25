import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersmarketsComponent } from './farmersmarkets.component';

describe('FarmersmarketsComponent', () => {
  let component: FarmersmarketsComponent;
  let fixture: ComponentFixture<FarmersmarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersmarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersmarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
