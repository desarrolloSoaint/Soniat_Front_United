import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoniatPublicoComponent } from './soniat-publico.component';

describe('SoniatPublicoComponent', () => {
  let component: SoniatPublicoComponent;
  let fixture: ComponentFixture<SoniatPublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoniatPublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoniatPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
