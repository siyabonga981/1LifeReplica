/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-addemployee',
    templateUrl: './addemployee.template.html'
})

export class addemployeeComponent extends NBaseComponent implements OnInit {
addEmployeeForm: FormGroup;
hide = true;
    constructor(private formBuiler: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
        super();
    this.addEmployeeForm = this.formBuiler.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });
    }

    ngOnInit() {
        this.addEmployeeForm.patchValue({
            password: this.data.password
        })
    }
    addNewEmployee(form){
    }
}
