import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from '../../services/localization.service'

@Component({
    selector: 'app-header-view',
    templateUrl: './header-view.component.html',
    styleUrls: ['./header-view.component.scss']
})
export class HeaderViewComponent implements OnInit {

    constructor(public locale: LocalizationService) {}

    ngOnInit() {
    }
}
