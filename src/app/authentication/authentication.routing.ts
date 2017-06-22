import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const authenticationRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export const AuthenticationRouting = RouterModule.forChild(authenticationRoutes);
