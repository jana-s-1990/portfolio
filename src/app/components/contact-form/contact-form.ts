import { Component } from '@angular/core';
import { Button } from '../button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),

    privacyAccepted: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  get showPrivacyError(): boolean {
    const controls = this.contactForm.controls;
    const otherFieldsAreValid =
      controls.name.valid && controls.email.valid && controls.message.valid;

    return controls.privacyAccepted.invalid &&
      (controls.privacyAccepted.touched || otherFieldsAreValid);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const formData = this.contactForm.getRawValue();
    console.log(formData);
  }
}
