import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/error/404' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
