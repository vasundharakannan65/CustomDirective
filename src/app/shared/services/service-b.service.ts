import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService {

  constructor() { }

  /**
   * MethodB
   */
  public MethodB() {
    console.log("Calling method B from service B")
  }
}
