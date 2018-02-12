import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LocalizationService } from '../../services/localization.service';
import { HttpService } from '../../services/http.service';
import { ToasterService } from '../../services/toastr.service';
import { ScrollService } from '../../services/scroll.service';

import { ICompany } from '../../models/company';
import { IHttpReq } from '../../models/http-req';
import { Image } from 'angular-modal-gallery'


@Component({
    selector: 'app-company-page',
    templateUrl: './company-page.component.html',
    styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {
    isLoaded: boolean;
    currentCompany: ICompany;
    email: string;
    discountUrl: string;
    subscribed: boolean;
    imagesArray: Array<Image> = [
        new Image(
          './resources/img/1.png',
          null, // no thumb
          null, // no description
          'http://www.google.com'
        ),
        new Image(
          './resources/img/2.png',
          null, // no thumb
          null, // no description
          'http://www.google.com'
        ),
        new Image(
          './resources/img/3.png',
          null, // no thumb
          null, // no description
          'http://www.google.com'
        ),
    ];

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
            this.currentCompany = data;
            this.isLoaded = true;
        }).catch((err) => {
            console.error(err);
        })
    }

    submitEmail(form: NgForm) {
        if (form.valid) {
            const sendData: IHttpReq = {
                method: "POST",
                url: this.currentCompany.isMarkedCheckInLviv? `/api/discount/${this.currentCompany._id}`: `/api/discount/subscribe/${this.currentCompany._id}`,
                body: {email: this.email},
                failMessage: 'Checkin discount'
            };

        this.httpService.sendRequest(sendData)
            .then((res) => {
                if (this.currentCompany.isMarkedCheckInLviv) {
                    this.discountUrl = res.discountUrl;
                    setTimeout(() => this.scrollService.scrollToElem(window.document.getElementsByTagName('section')[1], 2), 0);
                } else {
                    this.subscribed = true;
                }
            })
            .catch((err) => {
                console.error(err)
            });
        } else {
            console.error('ER ' + this.email);
        }
    }

}
