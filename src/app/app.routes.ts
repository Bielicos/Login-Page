import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { ResetPassword } from './pages/reset-password/reset-password';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Login',
        component: Login
    },
    {
        path: 'signup',
        title: 'Signup',
        component: Signup
    },
    {
        path: 'reset-password',
        title: 'Reset Password',
        component: ResetPassword
    }
];
