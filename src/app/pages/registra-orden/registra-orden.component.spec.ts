import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraOrdenComponent } from './registra-orden.component';

describe('RegistraOrdenComponent', () => {
  let component: RegistraOrdenComponent;
  let fixture: ComponentFixture<RegistraOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistraOrdenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistraOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
