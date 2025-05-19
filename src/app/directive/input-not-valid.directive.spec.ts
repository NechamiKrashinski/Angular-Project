// import { InputNotValidDirective } from './input-not-valid.directive';

// describe('InputNotValidDirective', () => {
//   it('should create an instance', () => {
//     const directive = new InputNotValidDirective();
//     expect(directive).toBeTruthy();
//   });
// });
import { InputNotValidDirective } from './input-not-valid.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('InputNotValidDirective', () => {
  let directive: InputNotValidDirective;
  let elemRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    // צור מופעים מדומים של ElementRef ו-Renderer2
    elemRef = new ElementRef(document.createElement('input'));
    renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
    
    // צור מופע של הדירקטיבה עם התלויות
    directive = new InputNotValidDirective(elemRef, renderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
