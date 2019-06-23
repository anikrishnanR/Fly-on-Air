import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtbookingComponent } from './ftbooking.component';

describe('FtbookingComponent', () => {
  let component: FtbookingComponent;
  let fixture: ComponentFixture<FtbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
