// @angular
import { ImportModule } from './import.module';
import { NgModule } from '@angular/core';

// other modules
import { AppRoutingModule } from './app-routing.module';

// services
import { HttpService } from './services/http.service';
import { LocalizationService } from './services/localization.service';
import { ToasterService } from './services/toastr.service';
import { ScrollService } from './services/scroll.service';

// guard
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

// components
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { HeaderViewComponent } from './components/header-view/header-view.component';
import { LangPanelComponent } from './components/lang-panel/lang-panel.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { ConfirmDiscountPageComponent } from './components/confirm-discount-page/confirm-discount-page.component';
import { CompanyEditPageComponent } from './components/admin/company-edit-page/company-edit-page.component';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { BannersConfigComponent } from './components/admin/banners-config/banners-config';

@NgModule({
    imports: [
        ImportModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HeaderViewComponent,
        IndexPageComponent,
        LangPanelComponent,
        CategoryPageComponent,
        CompanyPageComponent,
        ConfirmDiscountPageComponent,
        CompanyEditPageComponent,
        ImageCropperComponent,
        BannersConfigComponent,
    ],
    providers: [
        HttpService,
        LocalizationService,
        ToasterService,
        ScrollService,
        CropperSettings,
        IsLoggedInGuard,
    ],
    entryComponents: [
    ],
    bootstrap: [AppComponent]

})
export class AppModule {}
