import { Directive } from '@angular/core';

/**
 * Generated class for the MathJaxDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[math-jax]' // Attribute selector
})
export class MathJaxDirective {

  constructor() {
    console.log('Hello MathJaxDirective Directive');
  }

}
