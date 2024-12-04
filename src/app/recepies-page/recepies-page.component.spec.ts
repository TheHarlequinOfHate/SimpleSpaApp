import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiesPageComponent } from './recepies-page.component';

describe('RecepiesPageComponent', () => {
  let component: RecepiesPageComponent;
  let fixture: ComponentFixture<RecepiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
