import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAdminComponent } from './artist.admin.component';

describe('ArtistAdminComponent', () => {
  let component: ArtistAdminComponent;
  let fixture: ComponentFixture<ArtistAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistAdminComponent]
    });
    fixture = TestBed.createComponent(ArtistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
