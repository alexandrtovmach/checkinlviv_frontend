import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LocalizationService } from '../../../services/localization.service';
import { HttpService } from '../../../services/http.service';
import { ToasterService } from '../../../services/toastr.service';
import { CropperSettings } from 'ng2-img-cropper';
import { AngularFireStorage } from 'angularfire2/storage';

import { ICompany } from '../../../models/company';
import { IHttpReq } from '../../../models/http-req';

@Component({
    selector: 'app-banners-config',
    templateUrl: './banners-config.html',
    styleUrls: ['./banners-config.scss']
})
export class BannersConfigComponent implements OnInit {
    isLoaded: boolean;
    banners = {};
    companies: [ICompany];

    constructor(
        public locale: LocalizationService,
        public httpService: HttpService,      
        public toastrService: ToasterService
    ) {}

    ngOnInit() {
        this.httpService.sendRequest({
            method: 'GET',
            url: `/api/company`
        }).then((data) => {
            console.log(data);
            this.companies = data;
        })

        this.httpService.sendRequest({
            method: 'GET',
            url: `/api/banners`
        }).then((data) => {
            console.log(data);
            this.banners = data;
            this.isLoaded = true;
        })
    }
    
    submit(company: NgForm) {
        // this.checkAll = true;
        // if (company.valid && this.checkAllImagesUploaded()) {
        //     // this.checkAll = false;
        //     this.uploadBanners((err, data) => {
        //         if (err) {
        //             return console.error(err)
        //         }
        //         const newCompany: ICompany = {
        //             banners: data.banners,
        //             name: {
        //                 en: company.value.companyNameEn,
        //                 ru: company.value.companyNameRu,
        //                 ua: company.value.companyNameUa
        //             },
        //             description: {
        //                 en: company.value.companyDescriptionEn,
        //                 ru: company.value.companyDescriptionRu,
        //                 ua: company.value.companyDescriptionUa
        //             },
        //             address: {
        //                 en: company.value.companyAddressEn,
        //                 ru: company.value.companyAddressRu,
        //                 ua: company.value.companyAddressUa
        //             },
        //             email: company.value.email,
        //             category: company.value.category,
        //             link: company.value.link,
        //             phones: {
        //                 main: [company.value.phoneMain || ''],
        //                 reception: [company.value.phoneReception || ''],
        //                 fax: [company.value.phoneFax || ''],
        //                 book: [company.value.phoneBook || ''],
        //                 restaurant: [company.value.phoneRestaurant || '']
        //             },
        //             logo: data.logo,
        //             isMarkedCheckInLviv: false
        //         }
        //         if (window.location.pathname === '/admin/company') {
        //             this.httpService.sendRequest({
        //                 method: 'POST',
        //                 url: `/api/company/`,
        //                 body: newCompany,
        //                 successMessage: 'Company saved'
        //             }).then((data) => {
        //                 window.location.href = '/admin/company/' + data._id
        //             }).catch((err) => {
        //                 console.error(err);
        //             })
        //         } else {
        //             this.httpService.sendRequest({
        //                 method: 'PUT',
        //                 url: `/api/company/${window.location.href.split('/').pop()}`,
        //                 body: newCompany,
        //                 successMessage: 'Company updated'
        //             }).then((data) => {
        //                 window.location.reload;
        //             }).catch((err) => {
        //                 console.error(err);
        //             })
        //         }
        //     });
        // } else {
        //     console.error('ERR', company);
        // }
    }

    uploadBanners(callback) {
        let promises = [],
            bannersImg = {},
            logo = '';
        
        // this.banners.forEach(elem => {
        //     if (elem.link) {
        //         if (elem.image) {
        //             promises.push(
        //                 this.uploadFile(elem.image.split(',')[1])
        //                     .then(data => {
        //                         bannersImg[elem.imgName] = data.downloadURL;
        //                     })
        //             )
        //         } else {
        //             bannersImg[elem.imgName] = elem.link;
        //         }
        //     } else {
        //         promises.push(
        //             this.uploadFile(elem.image.split(',')[1])
        //                 .then(data => {
        //                     bannersImg[elem.imgName] = data.downloadURL;
        //                 })
        //         )
        //     }
        // })
        // if (this.logo.link) {
        //     if (this.logo.image) {
        //         promises.push(
        //             this.uploadFile(this.logo.image.split(',')[1])
        //                 .then(data => {
        //                     logo = data.downloadURL;
        //                 })
        //         )
        //     } else {
        //         logo = this.logo.link;
        //     }
        // } else {
        //     promises.push(
        //         this.uploadFile(this.logo.image.split(',')[1])
        //             .then(data => {
        //                 logo = data.downloadURL;
        //             })
        //     )
        // }

        Promise.all(promises)
            .then(() => {
                callback(null, {banners: bannersImg, logo: logo});
            })
            .catch(err => {
                callback(err)
            })
    }

//     uploadFile(base64: string) {
//         return this.storage.ref(`banners/${Date.now()}-${encodeURIComponent(base64.slice(-5))}`).putString(base64, 'base64', {contentType: 'image/png'});
//     }

//     checker(companyForm, field, error) {
//         if (this.checkAll) {
//             return (companyForm.controls[field] && companyForm.controls[field].errors)
//         }
//         return (companyForm.controls[field] && companyForm.controls[field].errors && companyForm.controls[field].touched) && true
//     }

//     checkAllImagesUploaded() {
//         if (this.checkAll) {
//             return this.banners.every(elem => {
//                 return !!elem.image || !!elem.link;
//             }) && (this.logo.image || this.logo.link);
//         }
//         return true
//     }
}
