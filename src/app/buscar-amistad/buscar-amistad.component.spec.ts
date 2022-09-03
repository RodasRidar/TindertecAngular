import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAmistadComponent } from './buscar-amistad.component';

describe('BuscarAmistadComponent', () => {
  let component: BuscarAmistadComponent;
  let fixture: ComponentFixture<BuscarAmistadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAmistadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAmistadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
