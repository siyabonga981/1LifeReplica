/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { methodsService } from '../../services/methods/methods.service';
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
    selector: 'bh-container',
    templateUrl: './container.template.html'
})

export class containerComponent extends NBaseComponent implements OnInit {
    employee: any;
    public hide = false;
    constructor(private _methodsService: methodsService, private router: Router) {
        super();
    }

    ngOnInit() {
        this.employee = this._methodsService.getUserFromSessionStorage();
    }
    toggleSearch() {
        this.hide = !this.hide;
    }
    logout(){
        sessionStorage.removeItem('employee');
        this.router.navigate(['../login']);
    }
}
