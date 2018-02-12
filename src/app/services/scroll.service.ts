import { Injectable } from '@angular/core';

@Injectable()


export class ScrollService {
    pageElem: HTMLElement = document.documentElement || document.body;
    headerHeight: Number = document.getElementById('header').clientHeight;
    pageHeight: number = this.pageElem.clientHeight;
    constructor() {}

    scrollToElem(elem, duration = 2, bottom = false) {

        if (!bottom) {
            const interval = setInterval(() => {
                if (window.pageYOffset >= elem.offsetTop - +this.headerHeight) {
                    clearInterval(interval);
                    window.scrollTo(0, elem.offsetTop - +this.headerHeight);
                } else {
                    window.scrollBy(0, 10*duration)
                }
            }, 10)
        }
    }

}
