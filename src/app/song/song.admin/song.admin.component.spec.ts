import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongAdminComponent } from './song.admin.component';

describe('SongComponent', () => {
  let component: SongAdminComponent;
  let fixture: ComponentFixture<SongAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongAdminComponent]
    });
    fixture = TestBed.createComponent(SongAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
