import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movieForm  = new FormGroup({
    title : new FormControl(''),
    director : new FormControl(''),
    cast : new FormControl(''),
    releaseDate : new FormControl('')
  })

  submitted = false;
  
  onSubmit()
  {

  }

}
