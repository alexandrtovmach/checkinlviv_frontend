import { Component, OnInit } from '@angular/core';
import { ICompany } from '../../models/company';
import { LocalizationService } from '../../services/localization.service';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-index-page',
    templateUrl: './index-page.component.html',
    styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
    allCompanies: Array<ICompany>;
    points = [
        {
            name: 'SEARCH',
            descript: 'SEARCH-DESC'
        },
        {
            name: 'CHECK',
            descript: 'CHECK-DESC'
        },
        {
            name: 'SAVE',
            descript: 'SAVE-DESC'
        },
    ]
    resultCompanies = []
    categories = [];
    banners = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/checkinlviv2018.appspot.com/o/banners%2F1518283753306-uQmCC?alt=media&token=b29de399-3ef1-4d74-a10e-f28600c93ff1',
            name: 'My company',
            link: 'http://localhost:4000/admin/company'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/checkinlviv2018.appspot.com/o/banners%2F1518283753306-uQmCC?alt=media&token=b29de399-3ef1-4d74-a10e-f28600c93ff1',
            name: 'My company',
            link: 'http://localhost:4000/admin/company'
        },
    ];
    activeCategory;
    onlyWithDiscount = false;

    constructor(
        public locale: LocalizationService,
        public httpService: HttpService
    ) {}

    ngOnInit() {
        this.httpService.sendRequest({
            method: 'GET',
            url: `/api/company/`
        }).then((data) => {
            this.allCompanies = data;
            this.resultCompanies = this.allCompanies.slice(0, 6)
            this.startBannerChanging(document.getElementsByClassName('logoTread')[0], Math.ceil(this.allCompanies.length/5), 5)
        }).catch((err) => {
            console.error(err);
        })

        this.httpService.sendRequest({
            method: 'GET',
            url: `/api/category`
        }).then((data) => {
            this.categories = data;
        })

        // here add function for upload banners 
        this.startBannerChanging(document.getElementById('bannerWrap'), this.banners.length)
    }

    startBannerChanging(bannerWrapper, count, delay?) {
        let i = 0;
        bannerWrapper.style.transform = `translateX(-${100 * i}%)`;
        i++;
        setInterval(() => {
            if (i === count) {
                i = 0;
            }
            bannerWrapper.style.transform = `translateX(-${100 * i}%)`
            i++;
        }, delay*1000 || 10000)
    }

    showCompaniesByCategory(categoryName, categoryBg, target, resultPanel) {
        if (!categoryBg) {
            resultPanel.style.backgroundColor = window.getComputedStyle(target).backgroundColor;
        } else {
            resultPanel.style.backgroundColor = categoryBg;
            target.parentElement.parentElement.parentElement.classList.add('hidePanelOnMobile')
        }
        for (let i = 0; i < target.parentElement.children.length; i++) {
            target.parentElement.children[i].style.marginRight = null;
            target.parentElement.children[i].style.borderRadius = null;
            target.parentElement.children[i].style.paddingLeft = null;
        }
        target.style.marginRight = '0px';
        target.style.paddingLeft = '15px';
        target.style.borderRadius = '20px 0 0 20px';
        this.activeCategory = categoryName;
        this.resultCompanies = this.allCompanies.filter(elem => {
            return elem.category && elem.category.some(el => el === this.activeCategory)
        }).slice(0, 5);
    }

    search(target, resultPanel, categoryPanel, onlyWithDiscount?) {
        if (onlyWithDiscount) {
            this.onlyWithDiscount = onlyWithDiscount.checked;
        }
        this.activeCategory = '';
        resultPanel.style.backgroundColor = null;
        for (let i = 0; i < categoryPanel.children.length; i++) {
            categoryPanel.children[i].style.marginRight = null;
            categoryPanel.children[i].style.borderRadius = null;
            categoryPanel.children[i].style.paddingLeft = null;
        }

        this.resultCompanies = this.allCompanies.filter(elem => {
            if (this.onlyWithDiscount) {
                return elem.isMarkedCheckInLviv === this.onlyWithDiscount && elem.name && elem.name[this.locale.currentLang] && elem.name[this.locale.currentLang].toLowerCase().includes(target.value.toLowerCase());
            }
            return elem.name && elem.name[this.locale.currentLang] && elem.name[this.locale.currentLang].toLowerCase().includes(target.value.toLowerCase());
        }).slice(0, 6);
    }

}
