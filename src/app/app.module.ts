import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderInterceptor } from './core/services/interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FeaturesModule,
        SharedModule
    ]
})
export class AppModule { }
