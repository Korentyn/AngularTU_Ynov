import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
