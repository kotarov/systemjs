"use strict";
exports.Navigation = [
    {
        title: 'Фактуриране',
        children: [
            { title: 'Печат',
                desc: 'Печатане на фактури',
                path: 'Invoicing/Print',
                quick: true
            },
            { title: 'Фактури',
                desc: 'Преглед и редакция на Фактури',
                path: 'Invoicing/Invoices',
                quick: true
            },
        ]
    },
    {
        title: 'Склад',
        children: [
            { title: 'Продукти',
                desc: 'Управлениена продуктите',
                path: 'Products/List'
            },
            { title: 'Доставки',
                desc: 'Зареждане на склад',
                path: 'Products/Supply'
            },
        ]
    },
];
exports.Routing = [
    //{ path: '', redirectTo: 'Invoicing/Print', pathMatch: 'full' },
    { path: 'Invoicing/Print', loadChildren: 'system_modules/not-installed/not-installed.js#NotInstalledModule' },
    { path: 'Invoicing/Invoices', loadChildren: 'system_modules/not-installed/not-installed.js#NotInstalledModule' },
    { path: 'Products/Supply', loadChildren: 'system_modules/not-installed/not-installed.js#NotInstalledModule' },
];

exports.Styles = [
    "css/themes/indigo-pink.css",
    "css/table.css",
    "css/style.css"
];

