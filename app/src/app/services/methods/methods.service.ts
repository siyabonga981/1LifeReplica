/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class methodsService {
    constructor(private router: Router) { }
    getUserFromSessionStorage() {
        if (sessionStorage.getItem('employee')) {
            return JSON.parse(sessionStorage.getItem('employee'));
        } else {
            alert('Please log in');
            this.router.navigate(['employeeLogin']);
        }
    }
}
