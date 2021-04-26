/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { dialogService } from '../../services/dialog/dialog.service';
import { api } from '../../sd-services/api';
import { Router } from '@angular/router';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-index',
    templateUrl: './index.template.html'
})

export class indexComponent extends NBaseComponent implements OnInit {

    
    public doughnutChartData: Array<any> = [
        {
            data: [
                25,
                11,
                8,
                9
            ]
        }
    ];

    doughnutchartcolours = [{
        backgroundColor: [
            '#48BCD6', 'limegreen', 'red', 'black'
        ]
    }
    ]
    public doughnutChartLabels: string[
    ] = [
            'New',
            'Paid',
            'Rejected',
            'NETT Movement'
        ];

    public doughnutChartOptions: any = {
        responsive: true
    };


    employee: any;
    claimDataSource;
    funeralDataSource;
    displayedColumns: string[] = ['status', 'count', 'value'];
    constructor(private dialog: dialogService, private api: api, private router: Router) {
        super();
    }

    ngOnInit() {
        this.getUser();
        this.claimDataSource = this.employee.lifeClaims;
        this.funeralDataSource = this.employee.funeralClaims;
        console.log(this.employee)
    }
    getUser() {
        if (sessionStorage.getItem('employee')) {
            this.employee = JSON.parse(sessionStorage.getItem('employee'));
        } else {
            alert('Please log in');
            this.router.navigate(['employeeLogin']);
        }
    }
}

