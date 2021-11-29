import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective {

  constructor(private element : ElementRef) { }

  isPasswordValid !: boolean
  showErrorMessage : boolean = true


  @Output() passwordValue = new EventEmitter();

  @HostListener('focusout') onFocusOut() {
    this.validateEmail(this.element.nativeElement.value);                                                             
  }

  validateEmail(password : string)
  {
    const regularExpression = /[a-z]{8}/;
    this.isPasswordValid = regularExpression.test(String(password).toLowerCase());

    if(!this.isPasswordValid)
    {
      this.element.nativeElement.style.border = "solid red 2px";  
      this.showErrorMessage = true;     
    }
    else
    {
      this.element.nativeElement.style.border = "solid green 2px"; 
    }  

    this.passwordValue.emit(this.showErrorMessage); 

  }

}
