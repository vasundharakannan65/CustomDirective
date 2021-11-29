import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Directive({
  selector: '[appDateformat]'
})
export class DateformatDirective {

  constructor(private element : ElementRef) { }
 
  @Input() defaultSeparator !: string

  @Output() dateValue = new EventEmitter();

  transformedDate !: string 
  
  dayDate !: number 
  month !: number 
  year !: number 

  isDateValid : boolean = true

  @HostListener('focusout') onFocusOut() {
    this.changeToDateFormat(this.element.nativeElement.value,this.defaultSeparator);                                                             
  }

  changeToDateFormat(data : any,separator : string)
  { 
    debugger
    //LEAP YEAR VALIDATION PENDING
    const regularExpression = /^[0-9]*$/
    this.isDateValid = regularExpression.test(String(data).toLowerCase());

    this.dayDate = data.slice(0,2)
    this.month = data.slice(2,4)
    this.year = data.slice(4,8)
    
    if(data.length == 8 && this.isDateValid == true && data != 0 && 
      (this.IsLeapDate(this.month,this.dayDate)==true))
    {
        if(this.year > 2021)
        {
          this.element.nativeElement.style.border = "solid red 2px";
          this.isDateValid = false
        }
        else if(this.month > 12)
        {
          this.element.nativeElement.style.border = "solid red 2px";
          this.isDateValid = false
        } 
        else if(this.dayDate > 31)
        {
          this.element.nativeElement.style.border = "solid red 2px";
          this.isDateValid = false 
        } 
        else 
        {
          if(separator != '')
          {
            this.transformedDate = data.slice(0,2) + separator + data.slice(2,4) + separator + data.slice(4,8);
            this.element.nativeElement.style.border = "solid green 2px";
            this.isDateValid = true
            this.element.nativeElement.value = this.transformedDate
          } 
          else 
          {
            this.transformedDate = data.slice(0,2) + '/' + data.slice(2,4) + '/' + data.slice(4,8);
            this.element.nativeElement.style.border = "solid green 2px";
            this.isDateValid = true
            this.element.nativeElement.value = this.transformedDate
          }

        }
    } 
    else 
    {
      this.element.nativeElement.style.border = "solid red 2px";
      this.isDateValid = false 
    }

    this.dateValue.emit(this.isDateValid)
    
  }


  //LEAP YEAR USER DEFINED FUNCTION
  public IsLeapYear(year:number) : boolean
  {
      return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? true : false;
  }

  public IsLeapDate(month:number,date:number) : boolean 
  {
      return ((date != 30 && month != 2) ? true : ((date != 31 && month != 2) ? true : false));
  }


}


