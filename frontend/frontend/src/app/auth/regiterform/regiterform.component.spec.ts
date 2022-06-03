import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiterformComponent } from './regiterform.component';

describe('RegiterformComponent', () => {
  let component: RegiterformComponent;
  let fixture: ComponentFixture<RegiterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
