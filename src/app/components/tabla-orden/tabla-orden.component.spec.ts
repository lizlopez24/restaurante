import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOrdenComponent } from './tabla-orden.component';

describe('TablaOrdenComponent', () => {
  let component: TablaOrdenComponent;
  let fixture: ComponentFixture<TablaOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaOrdenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
