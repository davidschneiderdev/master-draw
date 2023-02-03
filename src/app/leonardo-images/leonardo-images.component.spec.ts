import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeonardoImagesComponent } from './leonardo-images.component';

describe('LeonardoImagesComponent', () => {
  let component: LeonardoImagesComponent;
  let fixture: ComponentFixture<LeonardoImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeonardoImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeonardoImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
