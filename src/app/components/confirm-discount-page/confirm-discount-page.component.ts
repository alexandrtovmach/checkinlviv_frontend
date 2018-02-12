import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LocalizationService } from '../../services/localization.service';
import { HttpService } from '../../services/http.service';
import { ToasterService } from '../../services/toastr.service';
import { ScrollService } from '../../services/scroll.service';

import { IDiscount } from '../../models/discount';
import { IHttpReq } from '../../models/http-req';


@Component({
    selector: 'app-confirm-discount-page',
    templateUrl: './confirm-discount-page.component.html',
    styleUrls: ['./confirm-discount-page.component.scss']
})
export class ConfirmDiscountPageComponent implements OnInit {
    isLoaded: boolean;
    currentDiscount: IDiscount;
    isConfirmedDiscount: boolean;


    constructor(
        public locale: LocalizationService,
        public httpService: HttpService,      
        public toastrService: ToasterService,
        public scrollService: ScrollService,
    ) {}

    ngOnInit() {
        this.httpService.sendRequest({
            method: 'GET',
            url: `/api${location.pathname}`
        }).then((data) => {
            this.currentDiscount = data;
            console.log(data)
            this.isLoaded = true;
        }).catch((err) => {
            console.error(err);
        })
    }

    confirm() {
        this.httpService.sendRequest({
            method: 'GET',
            url: `/api${location.pathname}/confirm`
        }).then(() => {
            this.isConfirmedDiscount = true;
        }).catch((err) => {
            console.error(err);
        })
    }

}
