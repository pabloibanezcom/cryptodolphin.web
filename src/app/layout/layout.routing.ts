import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthenticationGuard],
        children: [
            { path: 'dashboard', loadChildren: 'app/layout/dashboard/dashboard.module#DashboardModule' },
        ]
    }
];

export const LayoutRouting = RouterModule.forChild(layoutRoutes);
