import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminportalComponent } from './adminportal.component';

describe('AdminportalComponent', () => {
  let component: AdminportalComponent;
  let fixture: ComponentFixture<AdminportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminportalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
