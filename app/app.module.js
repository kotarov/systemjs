"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var router_1 = require('@angular/router');
var flex_layout_1 = require('@angular/flex-layout');
var not_found_1 = require('@system/not-found');
var app_component_1 = require('./app.component');
var AppConfig = require('./app.config.js');
var AppModule = (function () {
    function AppModule(mdIconRegistry) {
        mdIconRegistry.addSvgIconSetInNamespace('icons', 'svg/icons.svg');
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MaterialModule.forRoot(),
                flex_layout_1.FlexLayoutModule.forRoot(),
                router_1.RouterModule.forRoot(AppConfig.Routing.concat([
                    //{path:'Login', loadChildren: 'lib/login/login.ts#LoginModule'},
                    //{ path: 'Login', component: LoginComponent },
                    //{ path: 'login', component: LoginComponent },
                    { path: '**', component: not_found_1.NotFoundComponent }
                ]), { useHash: true }),
                not_found_1.NotFoundModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [material_1.MdIconRegistry])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map