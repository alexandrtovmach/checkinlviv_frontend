import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()


export class LocalizationService {
    currentLang: string;
    langPack: any;
    defaultLang = 'ua';
    availableLang = ['ua', 'ru', 'en'];


    constructor(private httpService: HttpService) {}

    initLocal(lang?) {
        const localStorageLang = localStorage.getItem('checkInLvivLang');
        if (lang) {
            this.currentLang = lang
            return this.sendReq(lang)
        }
        if (localStorageLang) {
            this.currentLang = localStorageLang;
            return this.sendReq(localStorageLang)
        }
        if (!window.navigator.language) {
            if (window.navigator.languages && window.navigator.languages[1]) {
                this.currentLang = window.navigator.languages[1].toLowerCase()
                return this.sendReq(this.currentLang)
            }
        } else {
            this.currentLang = window.navigator.language
            return this.sendReq(this.currentLang)
        }
        return this.sendReq(this.defaultLang)
    }

    sendReq(lang) {
        lang = this.availableLang.includes(lang)? lang: 'en';
        this.httpService.sendRequest({ method: 'GET', url: `/langpack/${lang}.json` })
            .then((langPack) => {
                this.langPack = langPack;
                localStorage.setItem('checkInLvivLang', this.currentLang);
            })
            .catch((err) => {
                console.error(err);
            })
    }
}
