import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        children: [
            { path: '', component: DashboardComponent, pathMatch: 'full' },
        ]
    }
];

export const DashboardRouting = RouterModule.forRoot(dashboardRoutes);
