import { Injectable } from '@angular/core';
import { ServiceBService } from './service-b.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAService {

  constructor(private _serviceB : ServiceBService) { }

  /**
   * MethodA
   */
  public MethodA() {
    this._serviceB.MethodB()
  }
}
