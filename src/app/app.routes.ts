import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Login Page',
        component: Login
    },
    {
        path: 'signup',
        title: 'Signup Page',
        component: Signup
    }
];
