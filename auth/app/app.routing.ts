import { ModuleWithProviders} from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Billing } from './components/billing/billing.component';
import { AuthorizedGuard } from './guards/authorize.guard';
import { UnSavedChangesGuard } from './guards/unSavedChanges.guard';


const appRoutes:Routes=[
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'billing',
        component:Billing ,canActivate:[AuthorizedGuard] , canDeactivate:[UnSavedChangesGuard]
    }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);