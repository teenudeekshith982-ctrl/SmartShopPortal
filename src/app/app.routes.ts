import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Products } from './components/products/products';
import { ProductDetails } from './components/product-details/product-details';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:"full"
    },
    {
        path:'login',
        component: Login
    },
    {
        path : 'dashboard',
        component: Dashboard
    },
    {
        path: 'products',
        component: Products
    },

    {
        path: 'products/:id',
        component: ProductDetails
    },

    {
        path: 'profile',
        component: Profile
    }
];
