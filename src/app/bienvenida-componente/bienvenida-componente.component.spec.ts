import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaComponenteComponent } from './bienvenida-componente.component';

describe('BienvenidaComponenteComponent', () => {
  let component: BienvenidaComponenteComponent;
  let fixture: ComponentFixture<BienvenidaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienvenidaComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
