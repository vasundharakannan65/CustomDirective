import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  constructor() { }

  //EMAIL ID CUSTOM DIRECTIVE
  email !: string
  isEmailValid : boolean = true
  showErrorMessage : boolean = true

  validateEmail(event:boolean)
  {
      this.showErrorMessage = event;
  } 

    //DATE FORMAT CUSTOM DIRECTIVE 
    date !: number
    separator : string = '';
    isDateValid : boolean = true

    validateDate(event : boolean)
    {
      this.isDateValid = event;
    }

    onKeyUp(event:any)
    {
      this.separator = event.srcElement.value
    }

    //PHONE NUMBER FORMAT CUSTOM DIRECTIVE
    isPhoneNumberValid : boolean = false;
    length !: number

    validatePhoneNumber(event:boolean)
    {
      this.isPhoneNumberValid = event;
    }

    onKey(event: any)
    {
      this.length = event.target.value;  
    }
}
