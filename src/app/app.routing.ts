import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', loadChildren: 'app/layout/layout.module#LayoutModule' },
    { path: 'login', loadChildren: 'app/authentication/authentication.module#AuthenticationModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
