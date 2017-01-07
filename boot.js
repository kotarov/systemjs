(function (global) {
  System.config({
    
    transpiler: 'js',
    
    paths: { 
      'npm:': 'https://unpkg.com/',
      //'root:': '../',
      'git:':'https://kotarov.github.io/systemjs/',
      'local:':'',
      //'scripts:': '../lib/'
    },
     map: { 
       //app: 'git:', 
       app: './app',
        '@angular/core'                    : 'npm:@angular/core@2.4.1/bundles/core.umd.min.js',
        '@angular/common'                  : 'npm:@angular/common@2.4.1/bundles/common.umd.min.js',
        '@angular/compiler'                : 'npm:@angular/compiler@2.4.1/bundles/compiler.umd.min.js',
        '@angular/platform-browser'        : 'npm:@angular/platform-browser@2.4.1/bundles/platform-browser.umd.min.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.4.1/bundles/platform-browser-dynamic.umd.min.js',
        '@angular/http'                    : 'npm:@angular/http@2.4.1/bundles/http.umd.min.js',
        '@angular/router'                  : 'npm:@angular/router@3.4.1/bundles/router.umd.min.js',
        '@angular/forms'                   : 'npm:@angular/forms@2.4.1/bundles/forms.umd.min.js',
        '@angular/material'                : 'npm:@angular/material/bundles/material.umd.js',
        '@angular/flex-layout'            : 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
        //'@angular/material'                : 'npm:@angular/material@2.0.0-beta.1/bundles/material.umd.js',
        //'@angular/flex-layout'            : 'npm:@angular/flex-layout@2.0.0-beta.1/bundles/flex-layout.umd.js',
        
        'rxjs'                             : 'npm:rxjs@5.0.2',
        //'settings'                         : 'root:settings',
        'lib'                              : 'local:lib',
        
        //'@angular/hummer': 'unpkg:@angular/hummer/hummer.umd.js',
    },
    
    packages: {
      app: { main: 'app', defaultExtension: 'js' },
      rxjs: { defaultExtension: 'js' }
    }
  });
  
  System
    .import('app')
    .catch(function(err){ console.error(err); }); 
  
})(this);