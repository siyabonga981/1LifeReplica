/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { api } from '../../sd-services/api';
import { MatDialog } from '@angular/material/dialog';
import { updateemployeeComponent } from '../../components/updateemployeeComponent/updateemployee.component';


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-usermaintenance',
    templateUrl: './usermaintenance.template.html'
})

export class usermaintenanceComponent extends NBaseComponent implements OnInit {
    employee;
    employees;
    displayedColumns: string[] = ['name', 'roleId', 'roleDescription', 'action'];
    employeeDatasource;
    constructor(private api: api, private dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        this.getEmployees();
        this.employee = JSON.parse(sessionStorage.getItem('employee'));
        console.log()
        this.employeeDatasource = this.employees;
    }
    getEmployees(): void {
        this.api.getEmployees('getEmployees')
            .then(res => {
                this.employees = res.local.result;
                this.employeeDatasource = this.employees;
                console.log(this.employees);
            })
    }
    deleteEmployee(selectedEmployeeId): void{
        this.api.deleteEmployee('deleteEmployee', selectedEmployeeId)
        .then(res => {
            console.log(res);
            this.getEmployees();
        })
    }

    openDialog(employee){
        this.dialog.open(updateemployeeComponent, {data:  employee}).afterClosed()
        .subscribe(result=> {
            this.api.updateEmployee('updateEmployee', {id: employee._id, payload: result})
            .then(res => {
                console.log(res);
                        this.getEmployees();
            })
        })
        
    }
}
