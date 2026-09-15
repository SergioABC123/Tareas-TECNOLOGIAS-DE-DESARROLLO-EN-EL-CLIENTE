import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorPadre } from './selector-padre';

describe('SelectorPadre', () => {
  let component: SelectorPadre;
  let fixture: ComponentFixture<SelectorPadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorPadre],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorPadre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
