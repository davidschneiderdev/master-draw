import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RembrandtImagesComponent } from './rembrandt-images.component';

describe('RembrandtImagesComponent', () => {
  let component: RembrandtImagesComponent;
  let fixture: ComponentFixture<RembrandtImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RembrandtImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RembrandtImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
