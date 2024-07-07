import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { repeat } from "rxjs";

export class RegisterPageForm {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    createForm(): FormGroup {
        let form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            repeatPassword: ['', Validators.required]
        });

        form.get('repeatPassword').addValidators(matchPasswords(form));

        return form;
    }
}

function matchPasswords(form: FormGroup): ValidatorFn {
    const password = form.get('password');
    const repeatPassword = form.get('repeatPassword');

    const validator = () => {
        return password.value == repeatPassword.value ? null : {isntMatching: true};
    }
    return validator;
}