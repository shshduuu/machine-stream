import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRendererComponent } from './details-renderer.component';

describe('DetailsRendererComponent', () => {
  let component: DetailsRendererComponent;
  let fixture: ComponentFixture<DetailsRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
