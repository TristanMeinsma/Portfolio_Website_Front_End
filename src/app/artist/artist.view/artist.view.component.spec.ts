import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistViewComponent } from './artist.view.component';

describe('ArtistViewComponent', () => {
  let component: ArtistViewComponent;
  let fixture: ComponentFixture<ArtistViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistViewComponent]
    });
    fixture = TestBed.createComponent(ArtistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
