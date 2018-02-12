import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../../services/localization.service';
import { HttpService } from '../../services/http.service';
import { ICompany } from '../../models/company';

@Component({
    selector: 'app-category-page',
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
    allCompanies: Array<ICompany>;
    categoryName: String;
    resultCompanies = [];
    banners = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/checkinlviv2018.appspot.com/o/banners%2F1518283753341-CYII%253D?alt=media&token=4b36f3d9-9d8c-4f50-9a28-6dc18c44bc3d',
            name: 'My company',
            link: 'http://localhost:4000/admin/company'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/checkinlviv2018.appspot.com/o/banners%2F1518283753341-CYII%253D?alt=media&token=4b36f3d9-9d8c-4f50-9a28-6dc18c44bc3d',
            name: 'My company',
            link: 'http://localhost:4000/admin/company'
        },
    ];
    bannersReverse = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/checkinlviv2018.appspot.com/o/banners%2F1518283753341-CYII%253D?alt=media&token=4b36f3d9-9d8c-4f50-9a28-6dc18c44bc3d',
            name: 'My company',
            link: 'http://localhost:4000/admin/company'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/checkinlviv2018.appspot.com/o/banners%2F1518283753341-CYII%253D?alt=media&token=4b36f3d9-9d8c-4f50-9a28-6dc18c44bc3d',
            name: 'My company',
            link: 'http://localhost:4000/admin/company'
        },
    ];

    constructor(
        public locale: LocalizationService,
        public httpService: HttpService,        
    ) {}

    ngOnInit() {
        this.categoryName = location.pathname.split('/')[2][0].toUpperCase() + location.pathname.split('/')[2].slice(1)
        this.httpService.sendRequest({
            method: 'GET',
            url: `/api/company${location.pathname}`
        }).then((data) => {
            this.resultCompanies = this.allCompanies = data;
        }).catch((err) => {
            console.error(err);
        })

        this.startBannerChanging(document.getElementsByClassName('bannerWrap')[0], this.banners.length)
        this.startBannerChanging(document.getElementsByClassName('bannerWrap')[1], this.banners.length)
    }

    startBannerChanging(bannerWrapper, count, delay?) {
        let i = 0;
        bannerWrapper.style.transform = `translateY(-${100 * i}%)`;
        i++;
        setInterval(() => {
            if (i === count) {
                i = 0;
            }
            bannerWrapper.style.transform = `translateY(-${100 * i}%)`
            i++;
        }, delay*1000 || 10000)
    }

    search(onlyWithDiscount) {
        this.resultCompanies = this.allCompanies.filter(elem => {
            if (onlyWithDiscount) {
                return elem.isMarkedCheckInLviv;
            }
            return true;
        });
    }

}
