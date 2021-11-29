import { Component, OnInit } from '@angular/core';
import { ServiceAService } from './shared/services/service-a.service';

@Component({
  selector: 'app-sample',
  template: `
    <p>
      sample works!
    </p>
  `,
  styles: [
  ]
})
export class SampleComponent implements OnInit {

  constructor(private _serviceA : ServiceAService) { }

  ngOnInit(): void {
    this._serviceA.MethodA()
  }


}
