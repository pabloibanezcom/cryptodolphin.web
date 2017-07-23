import { Routes, RouterModule } from '@angular/router';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardBaseComponent
    }
];

export const DashboardRouting = RouterModule.forChild(dashboardRoutes);
