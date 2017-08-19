import { Routes, RouterModule } from '@angular/router';
import { LiveBaseComponent } from './live-base/live-base.component';

const liveRoutes: Routes = [
    {
        path: '',
        component: LiveBaseComponent
    }
];

export const LiveRouting = RouterModule.forChild(liveRoutes);
