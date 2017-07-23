import { Routes, RouterModule } from '@angular/router';
import { PortfolioBaseComponent } from './portfolio-base/portfolio-base.component';

const portfolioRoutes: Routes = [
    {
        path: ':portfolioId',
        component: PortfolioBaseComponent,
        children: [
            { path: 'dashboard', loadChildren: 'app/layout/portfolio/dashboard/dashboard.module#DashboardModule' },
        ]
    }
];

export const PortfolioRouting = RouterModule.forChild(portfolioRoutes);
