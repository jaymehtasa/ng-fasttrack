import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static validRecipeType(control: AbstractControl): ValidationErrors | null {
    const validTypes = ['veg', 'non-veg'];
    if (control.value && !validTypes.includes(control.value)) {
      return { validRecipeType: true };
    }
    return null;
  }

  static validRecipeName(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Dalwada') {
          resolve({ validRecipeName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
