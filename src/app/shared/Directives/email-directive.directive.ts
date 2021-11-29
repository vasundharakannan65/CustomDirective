import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appEmailDirective]'
})
export class EmailDirectiveDirective {

  constructor(private element : ElementRef) { }

  isEmailValid : boolean = true
  showErrorMessage : boolean = true

  @Output() emailValue = new EventEmitter();

  @HostListener('focusout') onFocusOut() {
    this.validateEmail(this.element.nativeElement.value);                                                             
  }

  validateEmail(email : string)
  {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.isEmailValid = regularExpression.test(String(email).toLowerCase());

    if(!this.isEmailValid)
    {
      this.element.nativeElement.style.border = "solid red 2px";  
      this.showErrorMessage = true;     
    }
    else
    {
      this.element.nativeElement.style.border = "solid green 2px"; 
    }  

    this.emailValue.emit(this.showErrorMessage); 

  }

}
