import { CanDeactivate , Router} from '@angular/router';
import { Injectable } from "@angular/core";
import { Billing } from '../components/billing/billing.component';
@Injectable()
export class UnSavedChangesGuard implements CanDeactivate <Billing>{
    constructor(private router:Router){

    }
    canDeactivate(){
        return window.confirm("still want to leave");
    }
}