/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { api } from 'app/sd-services/api';

const TABLE_DATA = [
    { claimNumber: 9701025014849, policyNumber: 9701025014849, eventDate: '18/09/2020', status: 'CXD', actionDate: '18/09/2020', product: 'EL', fullName: 'Siyabonga Hlongwane', relationship: 'Main Member', dateOfCancellation: '18/09/2020', riskType: 'Pure Life' },
    { claimNumber: 9701025014850, policyNumber: 9701025014850, eventDate: '18/09/2020', actionDate: '18/09/2020', product: 'EL', fullName: 'Siyabonga Hlongwane', relationship: 'Main Member', status: 'CXD', dateOfCancellation: '18/09/2020', riskType: 'Pure Life' }
];
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-search',
    templateUrl: './search.template.html'
})

export class searchComponent extends NBaseComponent implements OnInit {
    displayedColumns: string[] = ['claimNumber', 'policyNumber', 'eventDate', 'status', 'actionDate'];
    policiesColumns: string[] = ['policyNumber', 'product', 'fullName', 'relationship', 'status', 'dateOfCancellation', 'riskType']
    dataSource = TABLE_DATA;
    employee: any;
    searchForm: FormGroup;
    searchCriteria = [
        { viewValue: 'Claim Number', value: 'claimNumber' },
        { viewValue: 'Policy Number', value: 'policyNumber' },
        { viewValue: 'SA ID Number', value: 'idNumber' },
        { viewValue: 'Date of Birth', value: 'DOB' }
        ];
    constructor(private router: Router, private formBuilder: FormBuilder, private api: api) {
        super();
        this.searchForm = this.formBuilder.group({
            searchCriteria: ['', [Validators.required]],
            searchPhrase: ['', [Validators.required]]
        })
    }

    ngOnInit() {
        this.getUser()
    }
    getUser() {
        if (sessionStorage.getItem('employee')) {
            this.employee = JSON.parse(sessionStorage.getItem('employee'));
        } else {
            alert('Please log in');
            this.router.navigate(['employeeLogin']);
        }
    }

    search(form) {
        console.log(form.value);
        // create object with query
        let body = {
            searchCriteria: form.value.searchCriteria, searchPhrase: form.value.searchPhrase
        }
        this.api.getClient(body)
            .then(res => {
                console.log(res);
            });

        // this.api.getBeneficiaries(body)
        //     .then(res => {
        //         console.log(res)
        //     })
    }
}
