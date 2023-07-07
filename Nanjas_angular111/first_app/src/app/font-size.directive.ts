import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(private elementRef: ElementRef) {} 
    @HostListener('mouseenter') onmouseenter(){
      this.elementRef.nativeElement.style.fontSize='24px'
    }
    @HostListener('mourseleave') onmouseleave(){
      this.elementRef.nativeElement.style.fontSize ='16px'
  
  }

}
