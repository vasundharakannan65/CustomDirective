import { Directive, ElementRef, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appPhoneNumber]'
})
export class PhoneNumberDirective {

  constructor(private element : ElementRef) { }

  isPhoneNumberValid !: boolean
  showErrorMessage !: boolean 

  @Output() phoneNumberValue = new EventEmitter();

  @HostListener('focusout') onFocusOut() {
    this.validatePhoneNumber(this.element.nativeElement.value);                                                             
  }

  validatePhoneNumber(data : number)
  {

    const regularExpression = /^[0-9]{10}/ ;
    this.isPhoneNumberValid = regularExpression.test(String(data).toLowerCase());

    if(this.isPhoneNumberValid && data != 0)
    {
        this.element.nativeElement.style.border = "solid green 2px";
        this.showErrorMessage = false;
    }
    else
    {
        this.element.nativeElement.style.border = "solid red 2px";
        this.showErrorMessage = true;
    }  

    this.phoneNumberValue.emit(this.showErrorMessage);
  }

}
