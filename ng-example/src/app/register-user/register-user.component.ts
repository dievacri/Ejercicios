import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.getRegisterForm();
  }

  getRegisterForm(): any {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }

  onSubmit ({value, valid}: {value: any, valid: boolean}) {
    console.log(value, valid)
  }
}
