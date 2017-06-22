import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: 'app/layout/dashboard/dashboard.module#DashboardModule' },
        ]
    }
];

export const LayoutRouting = RouterModule.forChild(layoutRoutes);
