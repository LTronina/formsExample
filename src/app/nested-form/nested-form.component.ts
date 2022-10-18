import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: [
    './nested-form.component.scss',
    './../shared/styles.scss',
    './nested-form.shared.scss',
  ],
})
export class NestedFormComponent {
  mainForm: FormGroup;

  readonly formGroups = {
    adress: 'adress',
    basicInfo: 'basicInfo',
  };

  readonly fieldNames = {};

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group(
      {
        [this.formGroups.basicInfo]: [],
        [this.formGroups.adress]: [],
      },
      { updateOn: 'change' }
    );
  }

  submit() {
    if (this.mainForm.invalid) {
      return;
    }
    console.log(this.mainForm.value);
  }
}
