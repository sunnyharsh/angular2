import { CanActivate} from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthorizedGuard implements CanActivate{
    canActivate(){
        console.log("in can Active function");
        return this.isAuthorized();
    }
    private isAuthorized():boolean{
        let isAuthorized:boolean=Math.random()<0.5;
        console.log(isAuthorized);
        if(!isAuthorized){
            console.log("is not authorized");
        }
        return isAuthorized;
    }
}