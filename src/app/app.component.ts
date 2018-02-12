import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { LocalizationService } from './services/localization.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss',
        "../../node_modules/ngx-toastr/toastr.css"
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    isIndexPage: boolean = false;

    constructor(public locale: LocalizationService) {}

    ngOnInit() {
        this.isIndexPage = (window.location.pathname === '/');
        this.locale.initLocal();
    }
}
