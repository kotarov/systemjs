import { NgModule, Component, enableProdMode, ViewEncapsulation, EventEmitter } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { RouterModule } from '@angular/router';

import * as AppConfig from './config';
import { CompanyConfig } from '../company.config';
import { PageNotFoundModule, PageNotFoundComponent } from './components/404';


@Component({
    selector: 'app',
    moduleId: module.id,
    styleUrls: AppConfig.Styles,
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'html/layout.html',
}) 
export class AppComponent {
    Config: object = AppConfig;
    //onTitle = new EventEmitter();
    
    constructor(){
        //this.onTitle.emit('svetlio');
        //console.log( AppConfig );
    }
}


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
        RouterModule.forRoot( AppConfig.Routing.concat([{path:'**',component:PageNotFoundComponent}]), { useHash: true } ),
        FlexLayoutModule.forRoot(),
        MaterialModule.forRoot(),
        BrowserModule,
        PageNotFoundModule
    ]
})
export class AppModule {
}


enableProdMode(); 
platformBrowserDynamic().bootstrapModule( AppModule ); 

