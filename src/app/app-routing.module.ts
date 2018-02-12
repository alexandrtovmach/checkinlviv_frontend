import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderViewComponent } from './components/header-view/header-view.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { ConfirmDiscountPageComponent } from './components/confirm-discount-page/confirm-discount-page.component';
import { CompanyEditPageComponent } from './components/admin/company-edit-page/company-edit-page.component';
import { BannersConfigComponent } from './components/admin/banners-config/banners-config';

// guards
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IndexPageComponent
    },
    {
        path: 'category/:category',
        component: CategoryPageComponent,
    },
    {
        path: 'company/:id',
        component: CompanyPageComponent,
    },
    {
        path: 'discount/:id',
        component: ConfirmDiscountPageComponent,
    },
    {
        canActivateChild: [IsLoggedInGuard],
        path: 'admin',
        children: [
            {
                path: 'company',
                component: CompanyEditPageComponent,
            },
            {
                path: 'company/:id',
                component: CompanyEditPageComponent,
            },
            {
                path: 'banners',
                component: BannersConfigComponent,
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        IsLoggedInGuard
    ]
})

export class AppRoutingModule { }
