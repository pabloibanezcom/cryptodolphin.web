import { Routes, RouterModule } from '@angular/router';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutBaseComponent,
        canActivate: [AuthenticationGuard],
        children: [
            { path: 'portfolio', loadChildren: 'app/layout/portfolio/portfolio.module#PortfolioModule' },
        ]
    }
];

export const LayoutRouting = RouterModule.forChild(layoutRoutes);
