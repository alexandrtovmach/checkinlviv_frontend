import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from '../../services/localization.service'

@Component({
    selector: 'app-lang-panel',
    templateUrl: './lang-panel.component.html',
    styleUrls: ['./lang-panel.component.scss']
})
export class LangPanelComponent implements OnInit {

    constructor(public locale: LocalizationService) {}

    ngOnInit() {}

    changeLang(lang) {
        this.locale.initLocal(lang);
    }
}
