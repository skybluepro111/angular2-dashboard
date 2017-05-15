import { Component, OnInit } from '@angular/core';
import {User} from './register.interface'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user:User
  constructor() { }

  ngOnInit() {
    this.user = {
      patient: {
        id: '',
        fname: '',
        mname: '',
        lname: '',
    },
      address: {
          add1: '',
          add2: '',
          add3: '',
          suburb:'',
          district:'',
          province:'',
          postcode:'',        
      },
      contact: {
          mobile:'',
          email:'',
      }
    } 
  }

   onSubmit({ value, valid }: { value: User, valid: boolean }) {
        // check if model is valid
        // if valid, call API to save customer
        console.log(value, valid);
    }
}
