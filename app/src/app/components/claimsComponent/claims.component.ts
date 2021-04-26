/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from "@angular/core";
import { NBaseComponent } from "../../../../../app/baseClasses/nBase.component";
import { methodsService } from "../../services/methods/methods.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { api } from "../../sd-services/api";
import { Router } from "@angular/router";
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: "bh-claims",
    templateUrl: "./claims.template.html",
})
export class claimsComponent extends NBaseComponent implements OnInit {
    employee: any;
    idNum;
    claimsForm: FormGroup;
    clients: any;
    beneficiaries: any;
    beneficiary;
    titles = [
        { title: "Mr" },
        { title: "Mrs" },
        { title: "Miss" },
        { title: "Ms" },
        { title: "Dr" },
        { title: "Gen" },
        { title: "Adv" },
    ];
    relationship = [
        { title: "Mother" },
        { title: "Father" },
        { title: "Brother" },
        { title: "Sister" },
        { title: "Aunt" },
        { title: "Uncle" },
        { title: "Partner" },
    ];
    constructor(
        private _methodsService: methodsService,
        private formBuilder: FormBuilder,
        private api: api
    ) {
        super();
        this.createBeneficiaryForm();
    }

    ngOnInit() {
        this._methodsService.getUserFromSessionStorage();
        this.employee = this._methodsService;
        this.getClients();
        this.getBeneficiaries();
    }
    saveClaim(form) {
        console.log(form.value);
    }
    populateSomeFields($event: Event) {
        this.idNum = (event.target as HTMLInputElement).value;
        console.log(event);
        if (this.idNum.charAt(6) < 5) {
            this.claimsForm.patchValue({
                faxNumber: "Male",
            });
        }
    }
    getClients(): any {
        this.api.getClients("clients").then(
            (res) => {
                this.clients = res.local.result;
                console.log(this.clients);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    getBeneficiaries(): any {
        this.api.getBeneficiaries("beneficiaries").then(
            (res) => {
                this.beneficiaries = res.local.result;
                console.log(this.beneficiaries);
            },
            (err) => {
                console.log(err);
            }
        );
    }

onSelect(a){
    for(let i = 0; i < this.beneficiaries.length; i++){
        if (this.beneficiaries[i].length == a.length){
            this.beneficiary = this.beneficiaries[i];
    console.log(this.beneficiary)
        }
    }
    this.populateForm()
}

populateForm(){
    let firstName = this.beneficiary.fullName.split(' ')[0];
    let lastName = this.beneficiary.fullName.split(' ')[1]
    this.claimsForm.patchValue({
            title: this.beneficiary.title,
            firstName: firstName,
            surname: lastName,
            initials: `${firstName[0]}${lastName[0]}`,
            idNumber: this.beneficiary.idNumber,
            dateOfBirth: this.beneficiary.DOB,
            relationship: this.beneficiary.relationship,
            gender: this.beneficiary.gender,
            cellNumber: this.beneficiary.contact.cell,
            homeTelephone: this.beneficiary.contact.homeTelephone,
            workTelephone: this.beneficiary.contact.workTelephone,
            faxNumber: this.beneficiary.faxNumber,
            email: this.beneficiary.contact.email,
            communicationType: this.beneficiary.title,
            isMainContact: this.beneficiary.title,
            pointOfConnection: this.beneficiary.pointOfConnection,
            addressLine1: this.beneficiary.address.street,
            addressLine2: this.beneficiary.address.addressLine2,
            addressLine3: this.beneficiary.address.addressLine3,
            suburb: this.beneficiary.address.town,
            code: this.beneficiary.address.code,
        })
    }

    createBeneficiaryForm(){
        this.claimsForm = this.formBuilder.group({
            title: ["", []],
            firstName: ["", []],
            surname: ["", []],
            initials: ["", []],
            idNumber: ["", []],
            dateOfBirth: ["", []],
            relationship: ["", []],
            gender: ["", []],
            cellNumber: ["", []],
            homeTelephone: ["", []],
            workTelephone: ["", []],
            faxNumber: ["", []],
            email: ["", []],
            communicationType: ["", []],
            isMainContact: ["", []],
            pointOfConnection: ["", []],
            addressLine1: ["", []],
            addressLine2: ["", []],
            addressLine3: ["", []],
            suburb: ["", []],
            code: ["", []],
        })
    }
}