// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatSnackBarModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSortModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatProgressBarModule,
    MatExpansionModule
} from '@angular/material';

// other modules
import 'mousetrap';
import { ToastrModule } from 'ngx-toastr';
import { QRCodeModule } from 'angular2-qrcode';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// component
@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        QRCodeModule,
        MatChipsModule,
        MatIconModule,
        MatAutocompleteModule,
        MatInputModule,
        MatTabsModule,
        ModalGalleryModule.forRoot(),
        ImageCropperModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
    ],
    exports: [
        BrowserModule,
        MatIconModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule,
        QRCodeModule,
        CdkTableModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatChipsModule,
        MatRadioModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatTabsModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSortModule,
        MatTooltipModule,
        MatMenuModule,
        MatListModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatProgressBarModule,
        MatExpansionModule,
        ModalGalleryModule,
        ImageCropperModule,
        AngularFireStorageModule,
    ],
    providers: []
})

export class ImportModule {

}

