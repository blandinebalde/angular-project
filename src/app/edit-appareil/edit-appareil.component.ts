import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = "èteint";

  constructor() { }
  onSubmit(form: NgForm){
  const name = form.value['name'];
  const status = form.value['status']    

  }

  ngOnInit(): void {
  }

}
