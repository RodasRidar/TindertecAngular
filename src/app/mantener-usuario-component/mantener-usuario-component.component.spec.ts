import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenerUsuarioComponentComponent } from './mantener-usuario-component.component';

describe('MantenerUsuarioComponentComponent', () => {
  let component: MantenerUsuarioComponentComponent;
  let fixture: ComponentFixture<MantenerUsuarioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenerUsuarioComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenerUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
