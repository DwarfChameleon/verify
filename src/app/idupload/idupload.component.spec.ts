import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IduploadComponent } from './idupload.component';

describe('IduploadComponent', () => {
  let component: IduploadComponent;
  let fixture: ComponentFixture<IduploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IduploadComponent]
    });
    fixture = TestBed.createComponent(IduploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
