import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]',
  standalone: true
})
export class FocusTrapDirective {
  private focusableElements: HTMLElement[] = [];
  
  constructor(private el: ElementRef) {
    this.initFocusTrap();
  }

  private initFocusTrap() {
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    this.focusableElements = Array.from(
      this.el.nativeElement.querySelectorAll(focusableSelectors)
    );

    if (this.focusableElements.length) {
      this.el.nativeElement.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          const firstFocusable = this.focusableElements[0];
          const lastFocusable = this.focusableElements[this.focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable.focus();
              e.preventDefault();
            }
          }
        }
      });
    }
  }
}
