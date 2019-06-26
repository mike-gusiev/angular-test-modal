import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';


describe('app component', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should show modal', () => {
    expect(component).toBeTruthy();
  });

  it('visible should be undefined', () => {
    expect(component.visible).toBeUndefined();
  });

  it('should have empty closing tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.overlay')).toBeDefined();
  });
});

